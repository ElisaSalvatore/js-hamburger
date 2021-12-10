//creo le due costanti:
//una per il bottone dell'hamburger menu e l'altro per il menu mobile
const hamburgerButton = document.querySelector(".header-right > a");
const closeMenu = document.querySelector(".hamburger-menu .close");

const hamburgerMenuMobile = document.querySelector(".hamburger-menu");

//attivare l'hamburger menu: al click sul bottone si apre il menu mobile
hamburgerButton.addEventListener ('click', function() {
    hamburgerMenuMobile.classList.add('active');
});

//click sulla x per chiudere il menu mobile
closeMenu.addEventListener ('click', function() {
    hamburgerMenuMobile.classList.remove('active');
});
