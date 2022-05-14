const express = require("express");
const routes = express.Router();

const register = require("./register");
 const login = require("./login");


routes.post("/register", register);
routes.post("/login", login);

module.exports = routes;
