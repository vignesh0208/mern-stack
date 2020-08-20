const express = require("express");
const router = express.Router();

const Authentication = require("../controllers/auth-ctrl")

const passport = require("passport");

router.post("/register", Authentication.RegisterUser);
router.post("/login", Authentication.LoginUser);

module.exports = router;