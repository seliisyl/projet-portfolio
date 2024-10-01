const users = [];

// Gestion de l'inscription
document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = { name, email, password };
    users.push(user);

    alert(`Merci ${name}, vous êtes inscrit avec succès !`);
    this.reset();
});

// Gestion de la connexion
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;

    const user = users