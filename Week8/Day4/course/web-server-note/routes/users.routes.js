const express = require("express");
const {
  getAllUsers,
  getOneUsers,
} = require("../controllers/users.controller.js");

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getOneUsers);

module.exports = router;
