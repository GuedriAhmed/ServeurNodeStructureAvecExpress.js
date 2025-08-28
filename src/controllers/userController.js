const userService = require("../services/userService");

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

module.exports = { getUserById };
