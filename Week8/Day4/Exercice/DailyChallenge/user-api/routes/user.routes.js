import express from "express";
import {
  getAllUsers,
  getOneUser,
  updateUser,
  loginUser,
  registerUser
} from "../controllers/user.controller.js";
const router = express.Router();

// POST /register: Allow users to register by providing a username and password. Hash the password using bcrypt before storing it in the the database
// POST /login: Allow users to login by providing their username and password. Compare the hashed password from the JSON file with the provided password.
// GET /users: Retrieve a list of all registered users from the database
// GET /users/:id: Retrieve a specific user by ID from the database
// PUT /users/:id: Update a user’s information by ID in the database

router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.put("/:id", updateUser);
router.post("/:id", loginUser);
router.post("/", registerUser);

export default router;
