const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db'); // Connexion à la base de données
const authRoutes = require('./routes/auth'); // Routes d'authentification

// Charger les variables d'environnement
dotenv.config();

// Connexion à MongoDB
connectDB();

const app = express();

// Middleware pour analyser les requêtes JSON
app.use(express.json());

// Servir le frontend (fichiers statiques)
app.use(express.static(path.join(__dirname, '../frontend')));

// Routes de base (API)
app.use('/api/auth', authRoutes); // Routes pour l'inscription et la connexion

// Route par défaut pour servir index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

// Démarrer le serveur sur le port défini dans le fichier .env
const PORT = process.env.PORT || 5000 || 5001;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
