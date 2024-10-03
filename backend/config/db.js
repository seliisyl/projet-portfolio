const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connecté: ${conn.connection.host}`);
    } catch (err) {
        console.error(`Erreur de connexion à MongoDB: ${err.message}`);
        process.exit(1); // Arrête l'application si la connexion échoue
    }
};

module.exports = connectDB;
