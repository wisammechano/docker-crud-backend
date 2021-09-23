const router = require("express").Router();
const Todo_model = require("../models/todo");

router.get("/", async (req, res) => {
  const todos = await Todo_model.find({});
  res.render("index", { todos: todos });
});
module.exports = router;
