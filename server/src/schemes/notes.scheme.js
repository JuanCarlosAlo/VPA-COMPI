const mongoose = require("mongoose");

const NoteScheme = mongoose.Schema(
  {
    _id: String,
    userId: String,
    notes: [
      {
        _id: String,
        noteCreation: Number,
        noteText: String,
        noteTitle: String,

      },
    ],
  },
  {
    collection: "notes",
  }
);

const NotesModel = mongoose.model("notes", NoteScheme);

module.exports = NotesModel;
