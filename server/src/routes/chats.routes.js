const express = require("express");
const chatsRoutes = express.Router();
const controller = require("../controllers/chats.controller");

chatsRoutes.get("/all-chats/:id", controller.getAllChats);
chatsRoutes.post("/new-chat/:id", controller.createChats);
chatsRoutes.post("/add-message/:id", controller.addMessage);



module.exports = chatsRoutes;
