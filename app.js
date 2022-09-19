const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//Middleware
app.use(express.json());
app.use(cors());

//routes
const tourRouter = require("./routers/v1/tours.route");

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

//posting in database
app.use("/api/v1/tours", tourRouter);

module.exports = app;
