const express = require('express');
const {getAllUsers} = require("../controller/users.controller.js")
const router = express.Router()

router.get("/", getAllUsers)

module.exports = router