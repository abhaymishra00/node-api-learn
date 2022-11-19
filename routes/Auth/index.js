// Initial Express For Handle Http Traffic
const express = require("express");

// Create http traffic router
const router = express.Router();

// Importing Controllers
const LoginController = require("../../controllers/Auth/Login.controller");
// const RegisterController = require("../controllers/Auth/Register.controller");

// yourdomain.com/auth/login
router.get("/login", LoginController.LoginAsAdmin);

router.get("/register", LoginController.LoginAsUser);

module.exports = router;
