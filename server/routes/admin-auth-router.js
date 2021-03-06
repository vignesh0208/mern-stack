const express = require("express");
const router = express.Router();

const Authentication = require("../controllers/auth-ctrl")

const passport = require("passport");

router.post("/register", Authentication.AdminRegisterUser);
router.post("/login", Authentication.AdminLoginUser);
router.get("/user-detail", Authentication.UserDetail);
router.post("/user-role", Authentication.UserRole)

module.exports = router;