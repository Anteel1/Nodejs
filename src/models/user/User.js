const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = new Schema({
  username: { type: String },
  password: { type: String },
  phoneNumber: { type: String },
  card: { type: String },
  address: { type: String },
});

module.exports = mongoose.model("users", User);
