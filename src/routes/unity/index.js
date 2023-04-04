const express = require("express");
const router = express.Router();
// CONTROLLER
const BroadController = require("../../controllers/BroadController/index");

// ROUTER
router.get("/broad", BroadController.getAll);
router.post("/broad", BroadController.insert);
module.exports = router;
