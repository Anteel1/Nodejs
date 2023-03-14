const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Food = new Schema({
  name: { type: String },
  img: {
    data: Buffer,
    contentType: String,
  },
  description: { type: String },
  idCategory: { type: Schema.Types.ObjectId, ref: "categories" },
  cost: { type: Schema.Types.Number },
  inventory: { type: Number },
});

module.exports = mongoose.model("foods", Food);
