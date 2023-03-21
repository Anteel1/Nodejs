const express = require("express");
const router = express.Router();

// CONTROLLER
const UserController = require("../../controllers/UserController");

// ROUTER

router.get("/", UserController.getAllUserRender);
router.get("/getuser", UserController.getAllUser);
module.exports = router;
