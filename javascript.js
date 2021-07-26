// Redirecting to the begining after clicking the arrow

const arrow = document.querySelector('.up-arrow');

function arrowUp() {
    window.location.href = "#"
};

arrow.addEventListener('click', arrowUp);

// Menu Hamburger
const btnMenu = document.querySelector('.header--btn');

function toggleMenu() {
    const HeaderNav = document.querySelector('.header--nav');
    HeaderNav.classList.toggle('active');
}
btnMenu.addEventListener('click', toggleMenu);

// fixed Menu
(function() {
    const nav = document.querySelector('.header--nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 750 && window.innerWidth >= 600){
            nav.classList.add('menuFixed');
        } else {
            nav.classList.remove('menuFixed');
        }
    })
}) ();

//Talents for all missionaries


const images = document.querySelectorAll('.cards img');

function cardImages() {
    const toggle = this.classList.toggle('talent');
    if(this === images[0]) {
        images[0].setAttribute('src', '/img/violin.jpg');
        if (!toggle) {
            images[0].setAttribute('src', '/img/SisterThomson.jpeg');
        }
    } else if(this === images[1]) {
        images[1].setAttribute('src', '/img/photography.jpg');
        if (!toggle) {
            images[1].setAttribute('src', '/img/SisterSmoyer.jpeg');
        }
    } else if(this === images[2]) {
        images[2].setAttribute('src', '/img/basketball.jpg');
        if (!toggle) {
            images[2].setAttribute('src', '/img/ElderTorkornoo.jpeg');
        }
    } else if(this === images[3]) {
        images[3].setAttribute('src', '/img/banjo.jpg');
        if (!toggle) {
            images[3].setAttribute('src', '/img/ElderEddington.jpeg');
        }
    } else if(this === images[4]) {
        images[4].setAttribute('src', '/img/woodworking.jpeg');
        if (!toggle) {
            images[4].setAttribute('src', '/img/ElderBunker.jpeg');
        }
    } else if(this === images[5]) {
        images[5].setAttribute('src', '/img/origami.jpg');
        if (!toggle) {
            images[5].setAttribute('src', '/img/ElderPeterson.jpeg');
        }
    } else if(this === images[6]) {
        images[6].setAttribute('src', '/img/piano.jpg');
        if (!toggle) {
            images[6].setAttribute('src', '/img/ElderMontierth.jpeg');
        }
    } else if(this === images[7]) {
        images[7].setAttribute('src', '/img/crosscountry.jpg');
        if (!toggle) {
            images[7].setAttribute('src', '/img/Elderjohnston.jpeg');
        }
    } else if(this === images[8]) {
        images[8].setAttribute('src', '/img/speaking.jpg');
        if (!toggle) {
            images[8].setAttribute('src', '/img/ElderMorzelewski.jpeg');
        }
    } else if(this === images[9]) {
        images[9].setAttribute('src', '/img/pilot.jpg');
        if (!toggle) {
            images[9].setAttribute('src', '/img/ElderRamsey.jpeg');
        }
    }
}

images.forEach(function(element) {
element.addEventListener('click', cardImages);
});


// Animation of First Section

(function() {
    const section1 = document.querySelector('.section--1');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 240) {
            section1.classList.add('section--1__animation');
        } else {
            section1.classList.remove('section--1__animation');
        }
    })
}) ();