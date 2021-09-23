const router = require("express").Router();
const Todo_model = require("../models/todo");

router
  .post("/todos", (req, res) => {
    const { text } = req.body;
    const newTodo = new Todo_model({ content: text, done: false });
    if (text == "") {
      res.redirect("/");
    }
    newTodo
      .save()
      .then(() => {
        res.status(201).redirect("/");
      })
      .catch((err) => console.log(err));
  })
  .put("/todos/:_id", (req, res) => {
    const { _id } = req.params;
    Todo_model.updateOne({ _id }, { done: true })
      .then(() => {
        res.status(200).json({ ok: true });
      })
      .catch((err) => console.log(err));
  })
  .delete("/todos/:_id", (req, res) => {
    const { _id } = req.params;
    Todo_model.deleteOne({ _id })
      .then(() => {
        res.status(204).end();
      })
      .catch((err) => console.log(err));
  });

module.exports = router;
