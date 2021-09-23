const mongoose = require("mongoose");
const Todoschema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  },
});

module.exports = new mongoose.model("Todo", Todoschema);
