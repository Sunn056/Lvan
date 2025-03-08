document.addEventListener("DOMContentLoaded", function () {
    // Interactividad para los enlaces del menú
    setTimeout(() => {
        const aviso = document.getElementById('aviso');
        if (aviso) {
            aviso.style.display = 'none';
        }
    }, 8000); // El aviso desaparece después de 5 segundos
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
