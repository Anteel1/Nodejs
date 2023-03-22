const express = require("express");
const router = express.Router();
// CONTROLLER
const CategoryController = require("../../../controllers/CategoryController");

// ROUTER
router.get("/:id", CategoryController.getCategoryInfor);
router.post("/:id", CategoryController.postUpdateCategory);
router.post("/:id/delete", CategoryController.postDeleteCategory);
module.exports = router;
