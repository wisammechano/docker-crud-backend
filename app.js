const express = require("express");
const mongoose = require("mongoose");

// Set to false if you don't want to seed the database
const SEED_DB = true;

const config = {
  MONGO_URI: "mongodb://mongo:27017/todo-app",
};

var app = express();
const PORT = process.env.PORT || 3000;
// Connect to mongodb
// mongoose.connect("mongodb://localhost/todo_list",{
mongoose.connect(config.MONGO_URI, {
  useNewUrlParser: true,
});

if (SEED_DB) {
  require("./seed")(config.MONGO_URI);
}

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(require("./routes/index"));
app.use(require("./routes/todo"));

// app.listen(3000, '192.168.101.9');
app.listen(PORT, console.log(`listening at ${PORT}`));
