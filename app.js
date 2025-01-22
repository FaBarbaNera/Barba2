// Funzione per aprire e chiudere il menu laterale
function toggleMenu() {
    document.getElementById('side-menu').classList.toggle('open');
}

// Funzione per caricare dinamicamente le sezioni
const links = document.querySelectorAll('#side-menu a');
const sections = document.querySelectorAll('.section');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1); // Ottieni l'id della sezione

        // Nascondi tutte le sezioni
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // Mostra la sezione selezionata
        const targetSection = document.getElementById(targetId + '-section');
        if (targetSection) {
            targetSection.style.display = 'block'; // Mostra la sezione cliccata
        }

        // Modifica il colore di sfondo della sezione in base al tasto
        if (targetId === 'home') {
            targetSection.style.backgroundColor = '#ff6347'; // Tomato
        } else if (targetId === 'menu') {
            targetSection.style.backgroundColor = '#ff8c00'; // Dark Orange
        } else if (targetId === 'ordina') {
            targetSection.style.backgroundColor = '#228B22'; // Dark Green
        } else if (targetId === 'ombrelloni') {
            targetSection.style.backgroundColor = '#1e90ff'; // Dodger Blue
        } else if (targetId === 'recensioni') {
            targetSection.style.backgroundColor = '#9932cc'; // Dark Orchid
        } else if (targetId === 'contatti') {
            targetSection.style.backgroundColor = '#ff1493'; // Deep Pink
        }

        // Rimuovi la classe 'active' da tutti i link
        links.forEach(link => {
            link.classList.remove('active');
        });

        // Aggiungi la classe 'active' al link selezionato
        this.classList.add('active');

        // Chiudi il menu dopo il clic (opzionale)
        document.getElementById('side-menu').classList.remove('open');
    });
});

// Mostrare la sezione "Home" come predefinita quando la pagina si carica
document.addEventListener('DOMContentLoaded', function() {
    const defaultSection = document.getElementById('home-section');
    defaultSection.style.display = 'block'; // Mostra la sezione Home per default
});
// Gestire l'espansione dei pannelli dell'accordion
document.querySelectorAll(".accordion").forEach(button => {
    button.addEventListener("click", () => {
        // Toggle l'attività del pulsante
        button.classList.toggle("active");
        
        // Toggle la visibilità del pannello corrispondente
        const panel = button.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
});
