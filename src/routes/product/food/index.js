const express = require("express");
const router = express.Router();
// CONTROLLER
const CategoryController = require("../../../controllers/CategoryController");

// ROUTER
router.get("/", (req, res, next) => {
  res.render("allfood");
});

module.exports = router;
