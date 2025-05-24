// Highlight the active navigation link
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-links a");
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.style.color = "#ffcc00"; 
            link.style.textDecoration = "underline";
        }
    });
});

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

const forms = document.querySelectorAll("form");
forms.forEach(form => {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you! Your form has been submitted.");
        form.reset();
    });
});
