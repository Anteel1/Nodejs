const express = require("express");
const router = express.Router();

// CONTROLLER
const UserController = require("../../../controllers/UserController/");

// ROUTER
router.get("/:slug", UserController.getUserInfor);
// router.post("/update", UserController.getUserInfor);

module.exports = router;
