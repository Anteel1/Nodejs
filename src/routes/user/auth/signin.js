const express = require("express");
const router = express.Router();
// CONTROLLER
const UserController = require("../../../controllers/UserController");

// ROUTER
router.get("/", UserController.getSignInPage);
router.post("/auth", UserController.postSignIn);
router.get("/forgotpass", UserController.getForgotPassword);
router.post("/forgotpass/post", UserController.postForgotPassword);

module.exports = router;
