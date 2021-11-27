const express = require("express");
const { register, login, logout } = require("../controllers");
const authenticate = require("../middleware/authenticate");

let authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", authenticate, logout);

module.exports = authRouter;
