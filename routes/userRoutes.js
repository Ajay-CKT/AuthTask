const express = require("express");
const authController = require("../controllers/authController");
const auth = require("../middleware/auth");

const userRoutes = express.Router();

userRoutes.get("/me", auth.verifyLogin, authController.me);

module.exports = userRoutes;
