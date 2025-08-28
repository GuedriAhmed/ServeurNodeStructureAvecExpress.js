const express = require('express');
const app = express();
// Middleware pour analyser les données JSON
app.use(express.json());
// Routes (sera complété plus tard)
app.get('/', (req, res) => {
 res.send('Bienvenue dans votre serveur structuré !');
});
module.exports = app;

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);