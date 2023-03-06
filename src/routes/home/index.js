const express = require("express");
const router = express.Router();

// CONTROLLER
const HomeController = require("../../controllers/HomeController");

// ROUTER
router.get("/", HomeController.index);

module.exports = router;
