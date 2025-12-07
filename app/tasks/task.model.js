const mongoose = require("mongoose");

const TaskModel = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, default: "" },
  createDate: { type: Date, default: Date.now },
  updateDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Task", TaskModel);
