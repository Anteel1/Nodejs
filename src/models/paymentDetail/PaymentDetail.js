const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Payment = new Schema({
  idPayment: { type: Schema.Types.ObjectId, ref: "payments" },
  idFood: { type: Schema.Types.ObjectId, ref: "foods" },
  stockFood: { type: Number },
});
module.exports = mongoose.model("paymentdetails", Payment);
