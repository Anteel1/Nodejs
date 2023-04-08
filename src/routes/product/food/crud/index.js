const express = require("express");
const router = express.Router();
const upload = require("../../../../config/multer/index");

// CONTROLLER
const FoodController = require("../../../../controllers/Food");
// ROUTER
router.post("/create", [upload.single("img")], FoodController.postCreateFood);
router.get("/create", FoodController.getCreateFood);
router.get("/:id", FoodController.getFoodInfor);
router.get("/:id/json", FoodController.getFoodInforJS);
router.post("/:id", FoodController.postUpdateFood);
router.post("/:id/delete", FoodController.postDeleteFood);
module.exports = router;
