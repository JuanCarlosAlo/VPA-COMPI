const express = require("express");
const tasksRoutes = express.Router();
const controller = require("../controllers/tasks.controller");

tasksRoutes.get("/all-tasks/:id", controller.getAllTasks);
tasksRoutes.post("/new-task/:id", controller.createTask);
tasksRoutes.patch('/complete-task/:id', controller.completeTask)


module.exports = tasksRoutes;
