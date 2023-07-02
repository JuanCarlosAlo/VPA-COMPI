const { v4 } = require("uuid");

const TasksModel = require("../schemes/tasks.scheme");
const UserModel = require("../schemes/users.scheme");
const { default: mongoose } = require("mongoose");

const controller = {};

controller.getAllTasks = async (req, res) => {

  try {
    const currentUser = await UserModel.findById(req.params.id)
      .populate({
        path: "tasks",
        model: "tasks",
      })
      .exec();
    console.log(currentUser)
    const tasks = currentUser.tasks;

    return res.status(200).send(tasks[0]);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Error reading database" });
  }
};


module.exports = controller;
