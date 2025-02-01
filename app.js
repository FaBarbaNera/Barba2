// Seleziona gli elementi
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

// Aggiungi un evento di click all'icona del menu
hamburgerMenu.addEventListener('click', () => {
    // Aggiungi o rimuovi la classe 'show' per mostrare o nascondere il menu
    navLinks.classList.toggle('show');
});
