const express = require("express");
const path = require("path");
const app = express();
const port = 8080;
console.log("making a request");
app.use("/", express.static(path.join(__dirname, "../build")));
app.listen(port);
