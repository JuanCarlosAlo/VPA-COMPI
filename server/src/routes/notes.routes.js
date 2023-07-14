const express = require("express");
const notesRoutes = express.Router();
const controller = require("../controllers/notes.controller");

notesRoutes.get("/all-notes/:id", controller.getAllNotes);
notesRoutes.post("/new-note/:id", controller.createNote);
notesRoutes.patch("/edit-note/:id", controller.editNote);
notesRoutes.delete("/delete-note/:id", controller.deleteNote);

module.exports = notesRoutes;
