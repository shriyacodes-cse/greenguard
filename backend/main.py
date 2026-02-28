from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import sqlite3

app = FastAPI()

# Allow frontend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database connection
conn = sqlite3.connect("data.db", check_same_thread=False)
cursor = conn.cursor()

# Create table (with points column)
cursor.execute("""
CREATE TABLE IF NOT EXISTS complaints (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    location TEXT,
    description TEXT,
    status TEXT,
    points INTEGER DEFAULT 0
)
""")
conn.commit()


# Home route
@app.get("/")
def home():
    return {"message": "GreenGuard API is running"}


# Add complaint (+10 points)
@app.post("/add")
def add_complaint(data: dict):
    cursor.execute(
        "INSERT INTO complaints (name, location, description, status, points) VALUES (?, ?, ?, ?, ?)",
        (data["name"], data["location"], data["description"], "New", 10)
    )
    conn.commit()
    return {"message": "Complaint added"}


# Get all complaints
@app.get("/all")
def get_all():
    cursor.execute("SELECT * FROM complaints")
    rows = cursor.fetchall()
    return rows


# Update status (if resolved → +20 points)
@app.put("/update/{id}")
def update_status(id: int, data: dict):

    if data["status"] == "Resolved":
        cursor.execute(
            "UPDATE complaints SET status=?, points=points+20 WHERE id=?",
            ("Resolved", id)
        )
    else:
        cursor.execute(
            "UPDATE complaints SET status=? WHERE id=?",
            (data["status"], id)
        )

    conn.commit()
    return {"message": "Status updated"}


# Get total points for a user
@app.get("/points/{name}")
def get_points(name: str):
    cursor.execute(
        "SELECT SUM(points) FROM complaints WHERE name=?",
        (name,)
    )
    result = cursor.fetchone()
    total_points = result[0] if result[0] else 0
    return {"points": total_points}