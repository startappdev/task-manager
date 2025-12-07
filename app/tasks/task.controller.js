const taskService = require("./task.service");

exports.getTasks = async (req, res) => {
  const tasks = await taskService.getTasks();
  return res.status(200).json(tasks);
}

exports.createTask = async (req, res) => {
  const task = await taskService.createTask(req.body);
  return res.status(201).json(task);
}
