const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

const Task = require("./tasks/task.model");

let mongod;

async function connectDB() {
  mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  console.log("MongoMemoryServer running:", uri);
  await mongoose.connect(uri);

  const initialTasks = [
    { title: 'Buy groceries', content: 'Milk, Bread, Eggs' },
    { title: 'Call John', content: 'Discuss project details' },
    { title: 'Read book', content: 'Finish chapter 5' }
  ];


  for (const taskData of initialTasks) {
    const existing = await Task.findOne({ title: taskData.title });
    if (!existing) {
      await Task.create(taskData);
    }
  }
}

module.exports = connectDB;
