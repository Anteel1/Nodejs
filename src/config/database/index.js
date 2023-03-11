const mongoose = require("mongoose");

const connectToDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://luonglkvn100:10l10l10L@demomongodb.rshjmd0.mongodb.net/demoMongo"
    )
    .then(() => console.log("Connected"))
    .catch((error) => console.log(error));
};

module.exports = { connectToDB };
