const mongoose = require("mongoose");

const JournalEntryScheme = mongoose.Schema(
  {
    _id: String,
    userId: String,
    journalsEntries: [
      {
        _id: String,
        journalEntryCreation: Number,
        journalEntryEdited: Number,
        journalEntryTitle: String,
        journalEntryText: String,
        journalEntryImgs: Array,
      },
    ],
  },
  {
    collection: "journalsEntries",
  }
);

const JournalsModel = mongoose.model("journalsEntries", JournalEntryScheme);

module.exports = JournalsModel;
