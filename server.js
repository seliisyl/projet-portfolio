const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Servir les fichiers statiques du dossier 'frontend'
app.use(express.static(path.join(__dirname, 'frontend')));

// Gestion des événements Socket.IO
io.on('connection', (socket) => {
    console.log('Un utilisateur est connecté.');

    socket.on('video-upload', (videoData) => {
        io.emit('new-video', videoData);
    });

    socket.on('disconnect', () => {
        console.log('Un utilisateur est déconnecté.');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});