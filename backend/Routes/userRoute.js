const express = require("express");
const router = express.Router();
const { signup, login } = require("../Controllerl/userControl");

router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
