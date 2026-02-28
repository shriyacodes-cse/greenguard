document.addEventListener("DOMContentLoaded", function () {

    const saveButtons = document.querySelectorAll(".save-btn");

    saveButtons.forEach(function(button) {
        button.addEventListener("click", function () {
            alert("Status updated successfully.");
        });
    });

});