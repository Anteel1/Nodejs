const express = require("express");
const router = express.Router();
// CONTROLLER
const FoodController = require("../../../controllers/Food");

// ROUTER
router.get("/cate", FoodController.getAllFoodwithCategory);
router.get("/", FoodController.getAllFood);
router.get("/render", FoodController.getAllFoodRender);

module.exports = router;
