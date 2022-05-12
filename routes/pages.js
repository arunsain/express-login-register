const { Router } = require("express");
const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.render("index");
});

routes.get("/register", (req, res) => {
  res.sendFile("register.html", { root: "./public" });
});

routes.get("/login", (req, res) => {
  res.sendFile("login.html", { root: "./public" });
});

module.exports = routes;
