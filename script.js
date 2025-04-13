document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents the page from reloading on form submission

        // Get form values
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const message = document.getElementById("message").value;

        // Create an object to store form data
        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            message: message
        };

        // Log form data (For now, until a backend is set up)
        console.log("Feedback Received:", formData);

        // Show an alert or confirmation message
        alert("Thank you for your feedback, " + firstName + "!");

        // Optionally, clear the form after submission
        form.reset();
    });
});
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    const hamburgerIcon = document.getElementById("hamburgerIcon");

    navLinks.classList.toggle("show");

    // Optional: toggle between ☰ and ✖
    if (navLinks.classList.contains("show")) {
        hamburgerIcon.textContent = "✖";
    } else {
        hamburgerIcon.textContent = "☰";
    }
}
