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


//Talents for all missionaries


const images = document.querySelectorAll('img');
console.log(images)

images.forEach(function(element) {

element.addEventListener('click', function() {
    const toggle = element.classList.toggle('talent');
    if(element === images[1]) {
        images[1].setAttribute('src', '/img/violin.jpg');
        if (!toggle) {
            images[1].setAttribute('src', '/img/SisterThomson.jpeg');
        }
    } else if(element === images[2]) {
        images[2].setAttribute('src', '/img/photography.jpg');
        if (!toggle) {
            images[2].setAttribute('src', '/img/SisterSmoyer.jpeg');
        }
    } else if(element === images[3]) {
        images[3].setAttribute('src', '/img/basketball.jpg');
        if (!toggle) {
            images[3].setAttribute('src', '/img/ElderTorkornoo.jpeg');
        }
    } else if(element === images[4]) {
        images[4].setAttribute('src', '/img/banjo.jpg');
        if (!toggle) {
            images[4].setAttribute('src', '/img/ElderEddington.jpeg');
        }
    } else if(element === images[5]) {
        images[5].setAttribute('src', '/img/woodworking.jpeg');
        if (!toggle) {
            images[5].setAttribute('src', '/img/ElderBunker.jpeg');
        }
    } else if(element === images[6]) {
        images[6].setAttribute('src', '/img/origami.jpg');
        if (!toggle) {
            images[6].setAttribute('src', '/img/ElderPeterson.jpeg');
        }
    } else if(element === images[7]) {
        images[7].setAttribute('src', '/img/piano.jpg');
        if (!toggle) {
            images[7].setAttribute('src', '/img/ElderMontierth.jpeg');
        }
    } else if(element === images[8]) {
        images[8].setAttribute('src', '/img/crosscountry.jpg');
        if (!toggle) {
            images[8].setAttribute('src', '/img/Elderjohnston.jpeg');
        }
    } else if(element === images[9]) {
        images[9].setAttribute('src', '/img/speaking.jpg');
        if (!toggle) {
            images[9].setAttribute('src', '/img/ElderMorzelewski.jpeg');
        }
    } else if(element === images[10]) {
        images[10].setAttribute('src', '/img/pilot.jpg');
        if (!toggle) {
            images[10].setAttribute('src', '/img/ElderRamsey.jpeg');
        }
    }
});
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
