const express = require("express");
const path = require("path");
const { join } = require("path");
const other = express.Router();

other.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, '../views/other.html'));
  });
  
  module.exports = other;