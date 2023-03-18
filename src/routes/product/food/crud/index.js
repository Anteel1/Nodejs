const express = require("express");
const router = express.Router();
// CONTROLLER
const FoodController = require("../../../../controllers/Food");

// ROUTER
router.post("/create", FoodController.postCreateFood);
router.get("/create", FoodController.getCreateFood);
router.get("/:id", FoodController.getFoodInfor);
router.post("/:id", FoodController.postUpdateFood);

module.exports = router;
