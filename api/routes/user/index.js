const express = require('express');
const router = express.Router();

// AUTH ROUTES
const register = require("./register");
const login = require("./login");


router.use("/login", login)
router.use("/register", register);

module.exports = router;