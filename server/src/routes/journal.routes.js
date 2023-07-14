const express = require("express");
const journalRoutes = express.Router();
const controller = require("../controllers/journal.controller");

journalRoutes.get("/all-entries/:id", controller.getAllEntries);
journalRoutes.post("/new-entry/:id", controller.createEntry);
journalRoutes.patch("/edit-entry/:id", controller.editEntry);
journalRoutes.delete("/delete-entry/:id", controller.deleteEntry);

module.exports = journalRoutes;
