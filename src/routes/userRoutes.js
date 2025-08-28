const express = require('express');
const router = express.Router();
//const { getAllUsers} = require('../controllers/userController');
//router.get('/', getAllUsers); // Obtenir tous les utilisateurs

//Ajoutez le middleware à une route spécifique
//const authMiddleware = require('../middlewares/auth');
//router.get('/', authMiddleware, getAllUsers);
//getuserbyid
const { getUserById } = require("../controllers/userController");
router.get('/:id', getUserById);

module.exports = router;