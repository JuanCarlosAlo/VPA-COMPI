const mongoose = require("mongoose");

const ChatsScheme = mongoose.Schema(
  {
    _id: String,
    userId: String,
    chatRooms: [
      {
        _id: String,
        chatRoomCreation: Number,
        chatRoomTitle: String,
        chatRoomLastRegistration: Number,
        messages: [
          {
            _id: String,
            messageCreator: String,
            messageText: String,
            messageCreation: Number,
          },
        ],
      },
    ],
  },
  {
    collection: "chats",
  }
);

const ChatsModel = mongoose.model("chats", ChatsScheme);

module.exports = ChatsModel;
