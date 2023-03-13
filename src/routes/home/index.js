const express = require("express");
const router = express.Router();

// CONTROLLER
const HomeController = require("../../controllers/HomeController");

// ROUTER
router.get("/", HomeController.index);
router.get("/dientichtamgiac/:chieucao/:canhday", (req, res, next) => {
  const { chieucao, canhday } = req.params;
  const result = (chieucao * canhday) / 2;
  res.json({ result: result });
});

module.exports = router;
