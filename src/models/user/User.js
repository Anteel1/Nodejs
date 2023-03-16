const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = new Schema({
  username: {
    type: String,
    require: true,
    unique: true,
    index: true,
  },
  password: { type: String, require: true },
  phoneNumber: { type: String },
  email: { type: String, require: true },
  card: { type: String },
  address: { type: String },
});

module.exports = mongoose.model("users", User);
