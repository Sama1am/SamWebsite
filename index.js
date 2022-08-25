const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");

//Routers section
const mainRouter = require('./routes/mainRoute')
const animationRouter = require('./routes/animationRoute')
const other = require('./routes/other')

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", mainRouter);
app.use("/animation", animationRouter);
app.use("/other", other);
app.use(express.static("scripts"));
app.use(express.static('styling'))

let server = http.createServer(app);

server.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});