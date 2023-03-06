const express = require("express");
const router = express.Router();
// CONTROLLER
const UserController = require("../../../controllers/UserController");

// ROUTER

router.get("/", UserController.getSignInPage);

module.exports = router;
