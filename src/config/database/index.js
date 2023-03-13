const monggoose = require("mongoose");
const uri =
  "mongodb+srv://luonglkvn100:10l10l10L@demomongodb.rshjmd0.mongodb.net/demoMongo?retryWrites=true&w=majority";
const connectParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
module.exports = monggoose.connect(uri, connectParams);
