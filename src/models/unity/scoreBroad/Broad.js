const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Score = new Schema({
  name: { type: String },
  time: { type: Number },
});
module.exports = mongoose.model("scores", Score);
