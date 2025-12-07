const express = require("express");
const router = express.Router();

const taskController = require("./task.controller");

router.get("/api/tasks", async (req, res) => {
  return taskController.getTasks(req, res);
});

router.post("/api/task", async (req, res) => {
  return taskController.createTask(req, res);
});

module.exports = router;
