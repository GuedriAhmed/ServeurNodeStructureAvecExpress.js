const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Route pour créer un produit
router.post('/', productController.createProduct);

module.exports = router;