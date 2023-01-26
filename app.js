const express = require("express");

const feedRoutes = require("./routes/feed");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
console.log("-----------------server started-------------------");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");                                //to tell the browser of codepan that it may accept
  res.setHeader("Access-Control-Allow-Methods","GET, POST, PUT, PATCH, DELETE");      //the responses sent by our server set Headers
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Autherization");
  next();
});

app.use("/feed", feedRoutes);

app.listen(8080);
