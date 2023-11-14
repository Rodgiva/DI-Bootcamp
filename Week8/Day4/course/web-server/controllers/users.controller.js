const { users } = require("../config/db.js");

const getAllUsers = (req, res) => {
  res.json(users);
};

const getOneUsers = (req, res) => {
  const { id } = req.params;
  const user = users.find((item) => item.id == id);
  res.json(user);
};

module.exports = {
  getAllUsers,
  getOneUsers
};
