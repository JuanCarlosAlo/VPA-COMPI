const express = require("express");
const tasksRoutes = express.Router();
const controller = require("../controllers/tasks.controller");

tasksRoutes.get("/all-tasks/:id", controller.getAllTasks);


module.exports = tasksRoutes;
