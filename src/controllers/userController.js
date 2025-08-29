const userService = require("../services/userService");
const User = require("../models/userModel");
// Controller qui appelle le service
const getUserById = (req, res) => {
  const { id } = req.params;
  const user = userService.findUserById(id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "Utilisateur non trouvé" });
  }
};

// add user to db

async function createUser() {
 try {
 const newUser = new User({
 username: 'Alice',
 email: 'alice@example.com',
 password: 'securepassword',
 });
 const savedUser = await newUser.save();
 console.log('Utilisateur créé :', savedUser);
 } catch (error) {
 console.error('Erreur lors de la création de l\'utilisateur :',
error);
 }
}
//createUser();

async function getUsers() {
 try {
 const users = await User.find();
 console.log('Liste des utilisateurs :', users);
 } catch (error) {
 console.error('Erreur lors de la récupération des utilisateurs :',
error);
 }
}
getUsers();

async function deleteUser(id) {
 try {
 const deletedUser = await User.findByIdAndDelete(id);
 console.log('Utilisateur supprimé :', deletedUser);
 } catch (error) {
 console.error('Erreur lors de la suppression de l\'utilisateur :',
error);
 }
}
deleteUser('68b17e96f567c67e8ef5e023');


module.exports = { getUserById };
