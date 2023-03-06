const mongoose = require("mongoose");

const connectToDB = async () => {
  await mongoose
    .connect("mongodb://localhost:27017/demo_mongo")
    .then(() => console.log("Connected!"))
    .catch((error) => console.log(error));
};

module.exports = { connectToDB };
