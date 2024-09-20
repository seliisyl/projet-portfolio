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

    const user = users.find(u => u.email === loginEmail && u.password === loginPassword);

    if (user) {
        alert(`Bienvenue ${user.name}, vous êtes connecté !`);
    } else {
        alert('Email ou mot de passe incorrect.');
    }

    this.reset();
});

// Gestion du formulaire d'envoi de vidéos
document.getElementById('videoForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const videoInput = document.getElementById('videoInput');
    const videoGallery = document.getElementById('videoGallery');

    if (videoInput.files.length > 0) {
        const videoFile = videoInput.files[0];
        const videoURL = URL.createObjectURL(videoFile);

        // Crée un nouvel élément vidéo dans la galerie
        const videoElement = document.createElement('video');
        videoElement.src = videoURL;
        videoElement.controls = true;
        videoElement.width = 300;

        // Ajoute la vidéo à la galerie
        videoGallery.appendChild(videoElement);

        // Réinitialise le champ d'entrée
        videoInput.value = '';
    }
});

const socket = io();

document.getElementById('videoUploadForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const videoInput = document.getElementById('video');
    const file = videoInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (event) {
            const videoData = event.target.result;
            socket.emit('video-upload', videoData);

            alert('Vidéo envoyée avec succès !');
            videoInput.value = '';  // Réinitialiser le formulaire
        };

        reader.readAsDataURL(file);  // Lire la vidéo comme URL de données
    }
});

// Réception des vidéos partagées
socket.on('new-video', function (videoData) {
    const videoGallery = document.getElementById('videoGallery');
    const videoElement = document.createElement('video');
    videoElement.src = videoData;
    videoElement.controls = true;
    videoElement.width = 300;

    videoGallery.appendChild(videoElement);  // Ajouter la vidéo à la galerie
});

