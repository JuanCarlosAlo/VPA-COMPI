const mongoose = require("mongoose");

const TasksScheme = mongoose.Schema(
  {
    _id: String,
    userId: String,
    taks: [
      {
        task_id: String,
        taskCreation: Number,
        taskTarget: Number,
        taskText: String,
        taskType: String,
        taskPriority: Number,
        TaskCompletion: Boolean,
      },
    ],
  },
  {
    collection: "tasks",
  }
);

const TasksModel = mongoose.model("tasks", TasksScheme);

module.exports = TasksModel;
