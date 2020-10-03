const express = require("express");
const router = express.Router();
const { register, login /*, profile*/ } = require("../controllers/auth");

router.post("/register", register).post("/login", login);
// .post('/profile', profile)

module.exports = router;
