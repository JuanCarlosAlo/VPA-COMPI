const mongoose = require("mongoose");

const JournalEntryScheme = mongoose.Schema(
  {
    _id: String,
    userId: String,
    journalsEntries: [
      {
        journalEntrie_id: String,
        journalEntrieCreation: Number,
        journalEntrieEdited: Number,
        JournalEntrieTitle: String,
        JournalEntrieText: String,
        JournalEntrieImgs: Array,
      },
    ],
  },
  {
    collection: "journalsEntries",
  }
);

const JournalsModel = mongoose.model("journalsEntries", JournalEntryScheme);

module.exports = JournalsModel;
