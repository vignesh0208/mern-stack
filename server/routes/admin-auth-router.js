const express = require("express");
const router = express.Router();

const Authentication = require("../controllers/auth-ctrl")

const passport = require("passport");

router.post("/register", Authentication.AdminRegisterUser);
router.post("/login", Authentication.AdminLoginUser);

module.exports = router;