const users = [];

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

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;

    const user = users.find(u => u.email === loginEmail && u.password === loginPassword);

    if (user) {
        alert(`Bienvenue ${user.name}, vous êtes connecté !`);
    } else {
        alert('Email ou mot de passe incorrect.');
    }

    this.reset();
});
