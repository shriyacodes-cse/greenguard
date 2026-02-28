document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("complaintForm");
  const complaintsSection = document.querySelector(".complaints-section .container");

  let currentUser = "";

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value;
    const location = form.querySelector("select").value;
    const description = form.querySelector("textarea").value;

    currentUser = name;

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
    loadPoints(currentUser);
  });

  async function loadComplaints() {
    const res = await fetch("http://127.0.0.1:8000/all");
    const data = await res.json();

    complaintsSection.innerHTML = `
      <h3 id="userPoints">Points: 0</h3>
      <h2>Recent Complaints</h2>
    `;

    data.forEach(item => {
      complaintsSection.innerHTML += `
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

  async function loadPoints(name) {
    if (!name) return;

    const res = await fetch(`http://127.0.0.1:8000/points/${name}`);
    const data = await res.json();

    const pointsElement = document.getElementById("userPoints");
    if (pointsElement) {
      pointsElement.innerText = "Points: " + data.points;
    }
  }

  loadComplaints();

});