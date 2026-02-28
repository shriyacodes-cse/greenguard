document.addEventListener("DOMContentLoaded", function () {
    loadComplaints();
});

async function loadComplaints() {
    const res = await fetch("http://127.0.0.1:8000/all");
    const data = await res.json();

    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = "";

    data.forEach(item => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item[3]}</td>
            <td>${item[2]}</td>
            <td class="status">${item[4]}</td>
            <td>
                <select onchange="updateStatus(${item[0]}, this.value)">
                    <option value="New" ${item[4] === "New" ? "selected" : ""}>New</option>
                    <option value="In Progress" ${item[4] === "In Progress" ? "selected" : ""}>In Progress</option>
                    <option value="Resolved" ${item[4] === "Resolved" ? "selected" : ""}>Resolved</option>
                </select>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

async function updateStatus(id, status) {
    await fetch(`http://127.0.0.1:8000/update/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ status: status })
    });

    loadComplaints();
}