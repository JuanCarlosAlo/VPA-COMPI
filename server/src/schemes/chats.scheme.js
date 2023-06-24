const mongoose = require("mongoose");

const ChatsScheme = mongoose.Schema(
  {
    _id: String,
    userId: String,
    chatRooms: [
      {
        chatRoom_id: String,
        chatRoomCreation: Number,
        chatRoomTitle: String,
        ChatRoomLastRegistration: Number,
        messages: [
          {
            message_id: String,
            messageCreator: String,
            MessageText: String,
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
