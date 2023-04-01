const express = require("express");
const router = express.Router();
// CONTROLLER
const FoodController = require("../../../controllers/Food");

// ROUTER
router.get("/cate", FoodController.getAllFoodwithCategory);
router.get("/", FoodController.getAllFood);
router.get("/render", FoodController.getAllFoodRender);
router.post("/render/json", FoodController.getSearchFoodByName);
router.post("/render", FoodController.getSearchRenderFoodByName);
module.exports = router;
