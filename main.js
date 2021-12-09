const elementHamMenu = document.querySelector(".fa-bars");
const hamburgerMenu = document.querySelector(".hamburger-menu");

elementHamMenu.addEventListener ('click', function() {
    hamburgerMenu.classList.add('active');
})

const closeMenu = document.querySelector(".fa-times");

closeMenu.addEventListener ('click', function() {
    hamburgerMenu.classList.remove('active');
})
