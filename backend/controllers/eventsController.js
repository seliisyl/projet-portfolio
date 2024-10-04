const Event = require('../models/Event');

// Créer un nouvel événement
const createEvent = async (req, res) => {
    const event = new Event({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        location: req.body.location,
        organizer: req.user.id, // Prendre l'ID de l'utilisateur authentifié
        participants: req.body.participants || [],
        streamUrl: req.body.streamUrl || '', // Ajouter l'URL du streaming
        videos: req.body.videos || [], // Liste des vidéos
        photos: req.body.photos || [] // Liste des photos
    });

    try {
        const newEvent = await event.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Obtenir tous les événements
const getEvents = async (req, res) => {
    try {
        const events = await Event.find().populate('organizer participants');
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtenir un événement par ID
const getEventById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id).populate('organizer participants');
        if (!event) return res.status(404).json({ message: 'Événement non trouvé' });
        res.json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Supprimer un événement
const deleteEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) return res.status(404).json({ message: 'Événement non trouvé' });

        await event.remove();
        res.json({ message: 'Événement supprimé' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createEvent,
    getEvents,
    getEventById,
    deleteEvent
};

