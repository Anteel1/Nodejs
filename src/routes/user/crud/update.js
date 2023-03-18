const express = require("express");
const router = express.Router();

// CONTROLLER
const UserController = require("../../../controllers/UserController");

// ROUTER
router.post("/:id/update", UserController.postUpdateUser);
router.get("/:id", UserController.getUserInfor);
router.get("/:slug", UserController.getUserInfor);
// router.post("/update", UserController.getUserInfor);

module.exports = router;
