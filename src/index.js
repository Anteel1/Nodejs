// INIT
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const routes = require("./routes");
const path = require("path");
const app = express();
const port = process.env.PORT || 3030;
const bodyParser = require("body-parser");
const mongoConnect = require("./config/database/index");
// BODY PARSER
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
// CONNECT TO DB
mongoConnect
  .then(() => console.log("Connect success !"))
  .catch((erro) => console.log(erro));
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
