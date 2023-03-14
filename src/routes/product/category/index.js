const express = require("express");
const router = express.Router();
// CONTROLLER
const CategoryController = require("../../../controllers/CategoryController");

// ROUTER
router.get("/allproductapi", CategoryController.getCategoryAPIP);
router.get("/allproduct", CategoryController.getCategory);

module.exports = router;
