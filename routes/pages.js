
const express = require("express");
const routes = express.Router();
const loggedin = require('../controllers/loggedin');
const logout = require("../controllers/logout");

routes.get("/",loggedin, (req, res) => {

  
  if(req.user){
    res.render("index",{status:"yes",user:req.user});
  }else{
    res.render("index",{status:"no",user:"nothing"});
  }
  
});

routes.get("/register", (req, res) => {
  res.sendFile("register.html", { root: "./public" });
});

routes.get("/login", (req, res) => {
  res.sendFile("login.html", { root: "./public" });
});
routes.get("/logout", logout);
module.exports = routes;
