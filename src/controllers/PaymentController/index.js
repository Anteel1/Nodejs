const Payment = require("../../models/payment/Payment");
// CLASS CONTROLLER
class PaymentController {
  // [GET] PAGE CREATE PAYMENT
  async getCreatePayment(req, res, next) {
    res.render("payment/newpayment");
  }
  // [POST] CREATE PAYMENT
  async postCreatePayment(req, res, next) {
    const formData = req.body;
    try {
      const newPayment = new Payment(formData);
      await newPayment.save();
      res.status(200).json({ status: "Success !" });
    } catch (error) {
      res.status(409).json({ erro: error });
      // }
    }
  }
  // [GET] PAGE ALL PAYMENT + USERNAME
  async getAllPayment(req, res, next) {
    try {
      await Payment.aggregate([
        {
          $lookup: {
            from: "users",
            localField: "idUser",
            foreignField: "_id",
            as: "users",
          },
        },
      ]).then((Payment) => {
        console.log(Payment);
        res.render("payment/allpayment", {
          Payment,
        });
      });
    } catch (error) {
      res.status(409).json({ error: error });
    }
  }
}

module.exports = new PaymentController();
