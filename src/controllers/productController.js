//import product model
const Product = require("../models/productModel");

//add product to db
async function createProduct() {
    try {
        const newProduct = new Product({
            name: "Sample Product",
            price: 19.99,
            stock: 100
        });
        const savedProduct = await newProduct.save();
        console.log("Produit créé :", savedProduct);
    } catch (error) {
        console.error("Erreur lors de la création du produit :", error);
    }
}
createProduct();

module.exports = { createProduct };