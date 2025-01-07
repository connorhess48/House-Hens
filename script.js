// Highlight the active navigation link based on the current page
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-links a");
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.style.color = "#ffcc00"; // Highlight the active link
            link.style.textDecoration = "underline";
        }
    });
});

// Smooth scroll for anchor links (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// Placeholder functionality for form submission
const forms = document.querySelectorAll("form");
forms.forEach(form => {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you! Your form has been submitted.");
        form.reset(); // Clear the form
    });
});
