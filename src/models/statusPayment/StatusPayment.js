const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const StatusPayment = new Schema({
  idPayment: { type: Schema.Types.ObjectId, ref: "payments" },
  idFood: { type: Schema.Types.ObjectId, ref: "foods" },
  stockFood: { type: Number },
});
module.exports = mongoose.model("status_payments", StatusPayment);
