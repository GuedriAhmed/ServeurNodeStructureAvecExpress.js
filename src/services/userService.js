const users = [
  { id: "1", name: "Alice", age: 25 },
  { id: "2", name: "Bob", age: 30 },
  { id: "3", name: "Charlie", age: 28 },
];

// Logique métier (ici : chercher un user)
const findUserById = (id) => {
  return users.find((u) => u.id === id);
};

module.exports = { findUserById };
