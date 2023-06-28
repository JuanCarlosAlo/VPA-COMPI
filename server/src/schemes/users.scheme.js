const mongoose = require("mongoose");

const UsersScheme = mongoose.Schema(
  {
    _id: String,
    email: String,
    userName: String,
    type: String,
    journalEntries: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "JournalsModel",
      },
    ],
    tasks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TasksModel",
      },
    ],

    chats: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ChatsModel",
      },
    ],
  },
  {
    collection: "users",
  }
);

const UserModel = mongoose.model("users", UsersScheme);

module.exports = UserModel;
