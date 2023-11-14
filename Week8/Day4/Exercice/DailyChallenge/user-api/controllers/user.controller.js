import {
  _getAllUsers,
  _getOneUser,
  _updateUser,
  _getOnePswd,
  _addPswd,
  _addUser,
} from "../models/user.model.js";
import bcrypt from "bcrypt";

// GET /users: Retrieve a list of all registered users from the database
const getAllUsers = async (req, res) => {
  try {
    const data = await _getAllUsers();
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "No Users" });
  }
};

// GET /users/:id: Retrieve a specific user by ID from the database
const getOneUser = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await _getOneUser(id);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "No User" });
  }
};

// PUT /users/:id: Update a user’s information by ID in the database
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, first_name, last_name, email } = req.body;
  try {
    await _updateUser(id, username, first_name, last_name, email);
    res.status(200).json({ msg: "Updated successfuly" });
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "Can not update a post" });
  }
};

// POST /register: Allow users to register by providing a username and password. Hash the password using bcrypt before storing it in the the database
const registerUser = async (req, res) => {
  const { username, first_name, last_name, email, password } = req.body;
  try {
    const saltRounds = 10;
    const users = await _getAllUsers();
    if (users.find((item) => item == username) === undefined) {
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        await _addPswd(username, hash);
        await _addUser(username, first_name, last_name, email);
      });
      res.status(200).json({ msg: "Register successfuly" });
    } else {
      res.status(401).json({ msg: "User already exist" });
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "Cannot register" });
  }
};

// POST /login: Allow users to login by providing their username and password. Compare the hashed password from the JSON file with the provided password.
const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const saltRounds = 10;

    bcrypt.hash(password, saltRounds, async (err, hash) => {
      const pswdRetrieved = await _getOnePswd(username);
      const match = bcrypt.compare(password, pswdRetrieved);
      if (match) {
        res.status(200).json({ msg: "Logged" });
      } else {
        res.status(401).json({ msg: "Incorrect password" });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "Cannot login" });
  }
};

export { getAllUsers, getOneUser, updateUser, loginUser, registerUser };