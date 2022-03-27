alert('Bienvenido. Esta es la primera versión de mi portafolio, ten en cuenta que este sitio aún está en construcción, por lo que día a día integraré nuevas funcionalidades y mejoras ')
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
// const navClose = document.querySelectorAll(".nav-menu-item a");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menu");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menu");
    }
});

const nav = document.querySelector('.contenedor-navegacion');

window.addEventListener('scroll', function() {
    nav.classList.toggle('active', window.scrollY > 0)
})



document.addEventListener('click', (e) => {
    if (e.target.closest('.nav-menu-link')) {
        navMenu.classList.remove("nav-menu_visible")
    }

})
