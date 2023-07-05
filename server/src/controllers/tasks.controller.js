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

    const tasks = currentUser.tasks;

    return res.status(200).send(tasks[0]);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Error reading database" });
  }
};

controller.createTask = async (req, res) => {
  try {
    const currentUser = await UserModel.findById(req.params.id);
    const {
      userId,
      taskCreation,
      taskDate,
      taskText,
      taskType,
      taskPriority,
      taskCompletion,
    } = req.body;

    let tasksCollection = await TasksModel.findOne({ userId: userId });

    if (!tasksCollection) {
      // Crear nueva colección si no existe
      tasksCollection = await TasksModel.create({
        _id: new mongoose.Types.ObjectId(),
        userId,
        tasks: [],
      });
    }

    const newTask = {
      _id: v4(),
      taskCreation,
      taskDate: new Date(taskDate),
      taskText,
      taskType,
      taskPriority,
      taskCompletion,
    };

    tasksCollection.tasks.unshift(newTask);
    await tasksCollection.save();
    await currentUser.tasks.unshift(tasksCollection._id);
    await currentUser.save();
    return res.status(200).send({ message: "Entry created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Error creating entry" });
  }
};

controller.completeTask = async (req, res) => {

  try {
    const {
      _id,
      taskCompletion,
    } = req.body;

    const result = await TasksModel.findOneAndUpdate(
      {
        userId: req.params.id,
      },
      {
        $set: {
          'tasks.$[task].taskCompletion': taskCompletion

        },
      },
      {
        arrayFilters: [{ 'task._id': _id }],
        new: true, // Devuelve el documento actualizado
      }
    );

    if (!result) {
      return res.status(404).send({ error: "Entry not found" });
    }
    await result.save()
    const currentUser = await UserModel.findById(req.params.id)
      .populate({
        path: "tasks",
        model: "tasks",
      })
      .exec();

    const tasks = currentUser.tasks;

    return res.status(200).send(tasks[0]);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Error reading database" });
  }
};



module.exports = controller;
