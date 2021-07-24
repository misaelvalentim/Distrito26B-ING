// Redirecting to the begining after clicking the arrow

const arrow = document.querySelector('.up-arrow');

function arrowUp() {
    window.location.href = "#"
}

arrow.addEventListener('click', arrowUp);


// Menu Hamburger

const btnMenu = document.querySelector('.header--btn');

function toggleMenu() {
    const HeaderNav = document.querySelector('.header--nav');
    HeaderNav.classList.toggle('active');

}

btnMenu.addEventListener('click', toggleMenu);
