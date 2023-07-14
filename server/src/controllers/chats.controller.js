const { v4 } = require("uuid");


const UserModel = require("../schemes/users.scheme");
const { default: mongoose } = require("mongoose");
const ChatsModel = require("../schemes/chats.scheme");

const controller = {};

controller.getAllChats = async (req, res) => {
  try {
    const currentUser = await UserModel.findById(req.params.id)
      .populate({
        path: "chats",
        model: "chats",
      })
      .exec();

    const chats = currentUser.chats;

    return res.status(200).send(chats[0]);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Error reading database" });
  }
};

controller.createChats = async (req, res) => {
  try {
    const currentUser = await UserModel.findById(req.params.id);
    const {
      userId,
      chatroomId,
      chatRoomCreation,
      chatRoomTitle,
      chatRoomLastRegistration,
      messages
    } = req.body;

    let chatCollection = await ChatsModel.findOne({ userId: userId });

    if (!chatCollection) {
      // Crear nueva colección si no existe
      chatCollection = await ChatsModel.create({
        _id: new mongoose.Types.ObjectId(),
        userId,
        chatRooms: [],
      });
    }

    const newChatRoom = {
      _id: chatroomId,
      chatRoomCreation,
      chatRoomTitle,
      chatRoomLastRegistration,
      messages: [
        messages
      ]
    };
    chatCollection.chatRooms.unshift(newTask);
    await chatCollection.save();
    const existingChatRef = currentUser.chats.find(
      (noteRef) => noteRef.toString() === chatCollection._id.toString()
    );
    if (!existingChatRef) {
      currentUser.tasks.unshift(chatCollection._id);
      await currentUser.save();
    }
    return res.status(200).send({ message: "Entry created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Error creating entry" });
  }
};

controller.addMessage = async (req, res) => {
  try {

    const currentUser = await UserModel.findById(req.params.id);
    const {
      userId,
      chatroomId,
      message
    } = req.body;
    const chatCollection = await ChatsModel.findOne({ userId: userId });

    const currentChatroom = chatCollection.chatRooms.find(chatroom => chatroom._id === chatroomId)

    currentChatroom.messages.push(message)
    await chatCollection.save();
    return res.status(200).send({ message: "Entry created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Error creating entry" });
  }
}

module.exports = controller;
