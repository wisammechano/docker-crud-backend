const todos = [
  {
    content: "Test todo 1",
    done: false,
  },
  {
    content: "Test todo 2",
    done: false,
  },
  {
    content: "Test todo 3",
    done: true,
  },
  {
    content: "Test todo 4",
    done: true,
  },
];

const Todo_model = require("./models/todo");

module.exports = function () {
  Todo_model.deleteMany().then(() => {
    Todo_model.create(todos, function (err, todos) {
      if (err) {
        console.log(err);
      }
      console.log(todos);
    });
  });
};
