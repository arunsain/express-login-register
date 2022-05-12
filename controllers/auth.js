const express = require("express");
const routes = express.Router();

const register = require("./register");
// const login = require("./login");
// const logout = require("./logout");

routes.post("/register", register);
// router.post("/login", login);
// router.get("/logout", logout);
module.exports = routes;
