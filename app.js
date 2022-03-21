const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const dbConfig = config.get("bcgreenhope.dbConfig.dbName");
const bodyParser = require("body-parser");

// Import Routes
const postsRoute = require("./routes/posts");
const restRoute = require("./routes/restaurant");

const app = express();
app.use(bodyParser.json());

// middleware(進到routes之前要執行的一層function，例如auth)
app.use("/api/posts", postsRoute);
app.use("/api/restaurant", restRoute);

// Routes
app.get("/", (req, res) => {
  res.send("Hello");
});

// connect to DB
// 
mongoose
  .connect(dbConfig)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Database not connected" + err);
  });
// Start listening
app.listen(process.env.PORT || 3000);
