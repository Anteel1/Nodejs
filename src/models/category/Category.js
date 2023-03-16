const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Category = new Schema({
  name: { type: String, index: true, require: true, unique: true },
});

module.exports = mongoose.model("categories", Category);
