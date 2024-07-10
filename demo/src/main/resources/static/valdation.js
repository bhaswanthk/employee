
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const idField = document.getElementById("id");
    const nameField = document.getElementById("name");
    const positionField = document.getElementById("position");
    const salaryField = document.getElementById("salary");

    form.addEventListener("submit", function(event) {
        // Clear previous error messages
        const errorMessages = document.querySelectorAll(".error-message");
        errorMessages.forEach(function(error) {
            error.remove();
        });

        let isValid = true;

        if (idField.value.trim() === "") {
            isValid = false;
            showError(idField, "ID is required");
        }

        if (nameField.value.trim() === "") {
            isValid = false;
            showError(nameField, "Name is required");
        }

        if (positionField.value.trim() === "") {
            isValid = false;
            showError(positionField, "Position is required");
        }

        if (salaryField.value.trim() === "" || isNaN(salaryField.value) || parseFloat(salaryField.value) <= 0) {
            isValid = false;
            showError(salaryField, "Salary must be a positive number");
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

    function showError(field, message) {
        const error = document.createElement("div");
        error.className = "error-message";
        error.style.color = "red";
        error.textContent = message;
        field.parentNode.insertBefore(error, field.nextSibling);
    }
});