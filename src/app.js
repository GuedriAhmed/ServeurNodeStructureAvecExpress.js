const express = require('express');
const connectDB = require('./config/db');

const app = express();
connectDB();

app.listen(3000, () => {
 console.log('Le serveur fonctionne sur le port 3000');
});

// Middleware pour analyser les données JSON
app.use(express.json());
// Routes (sera complété plus tard)
app.get('/', (req, res) => {
 res.send('Bienvenue dans votre serveur structuré !');
});

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);
/*
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();
// Définir un écouteur pour un événement
eventEmitter.on('salut', (nom) => {
 console.log(`Salut, ${nom} !`);
});
// Déclencher l'événement
eventEmitter.emit('salut', 'Alice');

eventEmitter.once('connexion', () => {
 console.log('Connexion établie une seule fois');
});
eventEmitter.emit('connexion');
eventEmitter.emit('connexion'); // Ne sera pas exécuté

class NotificationSystem extends EventEmitter {}
const notificationSystem = new NotificationSystem();


//function recevoireMessage(message,user) {
//    console.log(`Message reçu: ${message}" pour ${user}`);

//    notificationSystem.emit('nouvelleNotification', message,user);
//}

//recevoireMessage('Vous avez un nouveau message','fahmi');
//recevoireMessage('Daccord','ahmed');

*/

const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);


module.exports = app;
