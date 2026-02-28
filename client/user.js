document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("complaintForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Complaint submitted successfully.");
    });
  }

});