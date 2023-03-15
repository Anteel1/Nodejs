const express = require("express");
const router = express.Router();
// CONTROLLER
const FoodController = require("../../../../controllers/Food");

// ROUTER

router.get("/:id", FoodController.getFoodInfor);
module.exports = router;
