const monggoose = require("mongoose");
var env = require("../../../env");
const uri = env.MONGODB_URI;
const connectParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
module.exports = monggoose.connect(uri, connectParams);
