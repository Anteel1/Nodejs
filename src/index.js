// INIT
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const routes = require("./routes");
const path = require("path");
const app = express();
const port = 3000;
const db = require("./config/database/index");

// CONNECT TO DB
db.connectToDB();

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
