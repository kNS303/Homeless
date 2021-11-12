const express = require("express");
const router = express.Router();
const { register, login, logout } = require("../controllers/user.controllers");
const { isAuth } = require("../../../middlewares/auth.middleware");

router.post("/register", register);
router.post("/login", login);
router.post("/logout", [isAuth], logout);

module.exports = router;
