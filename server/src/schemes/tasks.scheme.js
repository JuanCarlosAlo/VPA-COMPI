const mongoose = require("mongoose");

const TasksScheme = mongoose.Schema(
  {
    _id: String,
    userId: String,
    tasks: [
      {
        _id: String,
        taskCreation: Number,
        taskDate: String,
        taskText: String,
        taskType: String,
        taskPriority: Number,
        taskCompletion: Boolean,
      },
    ],
  },
  {
    collection: "tasks",
  }
);

const TasksModel = mongoose.model("tasks", TasksScheme);

module.exports = TasksModel;
