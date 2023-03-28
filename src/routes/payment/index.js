const express = require("express");
const router = express.Router();
// CONTROLLER
const PaymentController = require("../../controllers/PaymentController/index");
// ROUTER
router.get("/", PaymentController.getCreatePayment);
router.post("/create", PaymentController.postCreatePayment);
router.get("/all", PaymentController.getAllPayment);
module.exports = router;
