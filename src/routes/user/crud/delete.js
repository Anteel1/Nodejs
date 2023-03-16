const express = require("express");
const router = express.Router();

// CONTROLLER
const UserController = require("../../../controllers/UserController/");

// ROUTER
router.post("/:id/delete", UserController.postDeleteUser);

module.exports = router;
