const Task = require("./task.model");

exports.getTasks = () => {
  return Task.find({}, {
    _id: 0
  });
};

exports.createTask = (data) => {
  const task = new Task(data);
  return task.save();
};
