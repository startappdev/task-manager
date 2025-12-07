const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const taskRoutes = require("./tasks/task.routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", taskRoutes);

connectDB().then(() => {
  app.listen(3000, () => console.log("Server running on port 3000"));
});
