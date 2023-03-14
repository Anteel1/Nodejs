const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Food = new Schema({
  name: { type: String },
  img: {
    data: Buffer,
    contentType: String,
  },
  description: { type: String },
  idCategory: { type: String },
  price: { type: Number },
  inventory: { type: Number },
});

module.exports = mongoose.model("foods", Food);
