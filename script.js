/* function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    
} */


function toggleMenu() {
    const menu = document.querySelector('.hamburger-menu .menu-links');
    menu.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.hamburger-menu .menu-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu();
        });
    });
});
