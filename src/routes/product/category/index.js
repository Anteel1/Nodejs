const express = require("express");
const router = express.Router();
// CONTROLLER
const CategoryController = require("../../../controllers/CategoryController");

// ROUTER
router.get("/getallapi", CategoryController.getCategoryAPIP);
router.get("/", CategoryController.getCategory);

module.exports = router;
