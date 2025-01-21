// Funzione per aprire e chiudere il menu laterale
function toggleMenu() {
    const menu = document.getElementById('side-menu');
    menu.classList.toggle('open');
}

// Funzione per caricare dinamicamente le sezioni
const links = document.querySelectorAll('#side-menu a');
const sections = document.querySelectorAll('.section');

// Aggiungi listener a ciascun link del menu
links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();  // Impedisce il comportamento di default (riscoprire la pagina)

        // Recupera l'ID della sezione da visualizzare
        const targetId = this.getAttribute('href').slice(1);

        // Nascondi tutte le sezioni
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // Mostra la sezione selezionata
        document.getElementById(targetId + '-section').style.display = 'block';

        // Rimuovi la classe 'active' da tutti i link
        links.forEach(link => {
            link.classList.remove('active');
        });

        // Aggiungi la classe 'active' al link selezionato
        this.classList.add('active');
    });
});

// Inizializza la sezione di home come visibile di default
document.getElementById('home-section').style.display = 'block';
document.getElementById('home-link').classList.add('active');
// Funzione per mostrare il menu all'interno della stessa pagina
document.getElementById('scopri-menu-link').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Mostra l'iframe e il relativo contenuto
    const menuFrameContainer = document.getElementById('menu-frame-container');
    menuFrameContainer.style.display = 'block';
    
    // Modifica il colore di sfondo della sezione in base al tasto "Menu"
    const menuSection = document.getElementById('menu-section');
    menuSection.style.backgroundColor = '#ff8c00'; // Colore specifico per il menu (Dark Orange)
});
