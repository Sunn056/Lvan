document.addEventListener("DOMContentLoaded", function () {
    // Ocultar el aviso después de 8 segundos
    setTimeout(() => {
        document.getElementById('aviso')?.style.setProperty("display", "none");
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
            document.querySelectorAll(".servicio").forEach(s => {
                if (s !== this) s.classList.remove("activo"); // Cierra los otros servicios
            });
            this.classList.toggle("activo"); // Muestra u oculta el actual
        });
    });
    document.addEventListener("DOMContentLoaded", function () {
        const servicios = document.querySelectorAll(".servicio");
    
        servicios.forEach(servicio => {
            servicio.addEventListener("click", function () {
                this.classList.toggle("activo"); // Alternar solo el contenido interno
            });
        });
    });
    
});
