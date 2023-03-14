const express = require("express");
const router = express.Router();
// CONTROLLER
const CategoryController = require("../../../controllers/CategoryController");

// ROUTER
router.get("/", CategoryController.getNewCategory);
router.post("/create", CategoryController.postCreate);

module.exports = router;
