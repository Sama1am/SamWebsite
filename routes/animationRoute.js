const express = require("express");
const path = require("path");
const { join } = require("path");
const animationRouter = express.Router();

animationRouter.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, '../views/animation.html'));
  });
  
  module.exports = animationRouter;

