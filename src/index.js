// INIT
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const routes = require("./routes");
const path = require("path");
const app = express();
const port = process.env.PORT || 3030;
const db = require("./config/database/index");
const { MongoClient } = require("mongodb");
// const db = require("./config/database/index");
const bodyParser = require("body-parser");
// BODY PARSER
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
// CONNECT TO DB
// db.connectToDB();
const uri =
  "mongodb+srv://luonglkvn100:10l10l10L@demomongodb.rshjmd0.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function main() {
  try {
    await client.connect();
    await listDatabases(client);
    await client.db("demoMongo");
    console.log("Connected successfully to server");
  } catch (e) {
    console.log(e);
  }
}
async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}
main();
// LOGGER
app.use(morgan("combined"));

// TEMPLATE ENGINE
app.engine(
  "handlebars",
  engine({
    extname: ".handlebars",
  })
);
app.set("view engine", ".handlebars");
app.set("views", path.join(__dirname, "resource/views"));

// ROUTE API
routes(app);

// REQUEST BODY CONFIG

// LISTEN PORT
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
