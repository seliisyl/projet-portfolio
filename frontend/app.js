// Fonction pour vérifier si un élément est visible dans la fenêtre
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fonction pour ajouter la classe 'visible' aux éléments qui deviennent visibles
function checkVisibleElements() {
    const fadeInElements = document.querySelectorAll('.fade-in');

    fadeInElements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

// Écouteur d'événements pour vérifier la visibilité des éléments lors du défilement
window.addEventListener('scroll', checkVisibleElements);

// Écouteur d'événements pour vérifier la visibilité des éléments lors du redimensionnement de la fenêtre
window.addEventListener('resize', checkVisibleElements);

// Écouteur d'événements pour vérifier la visibilité des éléments au chargement de la page
window.addEventListener('load', checkVisibleElements);

// Ajouter la classe 'visible' aux éléments fade-in lorsque le DOM est complètement chargé
document.addEventListener('DOMContentLoaded', () => {
    const fadeIns = document.querySelectorAll('.fade-in');
    fadeIns.forEach((el) => {
        el.classList.add('visible'); // Ajout de la classe 'visible'
    });
});

// Gestion du formulaire d'inscription
document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validation des données du formulaire
    if (!name || !email || !password) {
        alert('Veuillez remplir tous les champs');
        return;
    }

    // Logique pour gérer l'inscription (peut-être un appel API)
    console.log('Inscription:', { name, email, password });

    // Succès de l'inscription
    alert('Inscription réussie! Bienvenue sur YOULIVE!');

    // Réinitialiser le formulaire
    this.reset();
});

// Gestion du formulaire de connexion
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Validation des données du formulaire
    if (!email || !password) {
        alert('Veuillez remplir tous les champs');
        return;
    }

    // Logique pour gérer la connexion (peut-être un appel API)
    console.log('Connexion:', { email, password });

    // Succès du retour de connexion
    alert('Connexion réussie! Plaisir de vous revoir!');

    // Réinitialiser le formulaire
    this.reset();
});

