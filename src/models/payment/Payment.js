const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Payment = new Schema({
  idUser: { type: Schema.Types.ObjectId, ref: "users" },
  date: { type: String || Date },
  status: { type: Number },
  methods: { type: String },
  methodsService: { type: String },
});
module.exports = mongoose.model("payments", Payment);
