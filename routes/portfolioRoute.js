const express = require("express");
const path = require("path");
const { join } = require("path");
const portfolieRouter = express.Router();

portfolieRouter.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, '../views/portfolio.html'));
  });
  
  module.exports = portfolieRouter;