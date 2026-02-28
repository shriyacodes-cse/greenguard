document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("complaintForm");
  const complaintsSection = document.querySelector(".complaints-section .container");

  // Load saved username (if exists)
  const savedUser = localStorage.getItem("username");
  if (savedUser) {
    loadPoints(savedUser);
  }

  // Submit complaint
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const location = form.querySelector("select").value;
    const description = form.querySelector("textarea").value;

    if (!name) {
      alert("Please enter your name");
      return;
    }

    // Save username in browser
    localStorage.setItem("username", name);

    const data = {
      name: name,
      location: location,
      description: description
    };

    await fetch("http://127.0.0.1:8000/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    alert("Complaint submitted successfully.");

    form.reset();

    loadComplaints();
    loadPoints(name);
  });

  // Load complaints
  async function loadComplaints() {
  const res = await fetch("http://127.0.0.1:8000/all");
  const data = await res.json();

  const container = document.querySelector(".complaints-section .container");

  // Remove old cards only
  const oldCards = document.querySelectorAll(".complaint-card");
  oldCards.forEach(card => card.remove());

  data.forEach(item => {
    container.innerHTML += `
      <div class="complaint-card">
        <h3>${item[3]}</h3>
        <p>Location: ${item[2]}</p>
        <span class="status ${
          item[4] === "Resolved" ? "resolved" :
          item[4] === "In Progress" ? "in-progress" :
          "new"
        }">
          ${item[4]}
        </span>
      </div>
    `;
  });
}

  // Load points
  async function loadPoints(name) {
    if (!name) return;

    const res = await fetch(`http://127.0.0.1:8000/points/${name}`);
    const data = await res.json();

    const pointsElement = document.getElementById("userPoints");
    if (pointsElement) {
      pointsElement.innerText = "Points: " + data.points;
    }
  }

  // Initial load
  loadComplaints();

});