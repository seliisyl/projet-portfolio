// Importation des modules nécessaires
const express = require('express'); // Importation du module Express
const path = require('path'); // Importation du module Path

const app = express(); // Création d'une application Express
const PORT = 3000; // Définition du port sur lequel le serveur va écouter

// Middleware pour servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'frontend'))); // Spécifie que le dossier 'frontend' contient des fichiers statiques

// Route par défaut pour servir la page d'accueil
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html')); // Envoie le fichier index.html
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`); // Message dans la console pour indiquer que le serveur est en cours d'exécution
});

