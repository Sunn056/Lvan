document.addEventListener("DOMContentLoaded", function () {
    // Ocultar el aviso después de 8 segundos con animación fade
    setTimeout(() => {
        const aviso = document.getElementById('aviso');
        if (aviso) {
            aviso.style.transition = "opacity 0.5s";
            aviso.style.opacity = "0";
            setTimeout(() => {
                aviso.style.display = "none"; // Se oculta después de la animación
            }, 500);
        }
    }, 8000);

    // Interactividad para los enlaces del menú con desplazamiento suave
    document.querySelectorAll("a[href^='#']").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Interacción con los servicios para mostrar detalles
    document.querySelectorAll(".servicio").forEach(servicio => {
        servicio.addEventListener("click", function () {
            // Alternar la clase activo solo para el servicio clickeado
            this.classList.toggle("activo");
            // Cerrar los otros servicios
            document.querySelectorAll(".servicio").forEach(s => {
                if (s !== this) s.classList.remove("activo");
            });
        });
    });
});
