document.addEventListener("DOMContentLoaded", function () {
    // Interactividad para los enlaces del menú
    const navLinks = document.querySelectorAll(".nav-link");
    if (navLinks) {
        navLinks.forEach(link => {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                const targetId = this.getAttribute("href");
                document.querySelector(targetId).scrollIntoView({
                    behavior: "smooth"
                });
            });
        });
    }
});
