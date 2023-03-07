const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = new Schema({
  username: { type: String },
  password: { type: String },
  phoneNumber: { type: String, minLength: 8 },
  card: { type: Array },
  address: { type: Array },
});

module.exports = mongoose.model("users", User);
