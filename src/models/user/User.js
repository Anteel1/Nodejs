const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = new Schema({
  username: String,
  password: String,
  phoneNumber: String,
  card: Array,
  address: Array,
});

module.exports = mongoose.model("users", User);
