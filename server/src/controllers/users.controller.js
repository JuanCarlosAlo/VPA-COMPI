const { v4 } = require("uuid");
const UserModel = require("../schemes/users.scheme");

const controller = {};

controller.getAllUsers = async (req, res) => {
  const allUsers = await UserModel.find();

  try {
    res.status(200).send(allUsers);
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};

controller.getUserId = async (req, res) => {
  const autentifiedUser = await UserModel.findById(req.params.id);

  try {
    res.status(200).send(autentifiedUser);
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};

controller.createUser = async (req, res) => {
  console.log("test");
  try {
    const { _id, email, userName, type, journalsEntries, tasks, chats } =
      req.body;
    const newDate = Date.now();
    console.log(req.body);
    const newUser = await new UserModel({
      _id,
      email,
      journalsEntries,
      tasks,
      chats,
      userName,
      accountCreated: newDate,
      type,
    });

    const userExist = await UserModel.findOne({ email });
    if (userExist) {
      return res.status(409).send({ error: "User already exists" });
    }
    await newUser.save();
    console.log(newUser);
    return res.status(200).send({ message: "User created successfully" });
  } catch (error) {
    return res.status(500).send({ error: "Error creating user" });
  }
};

module.exports = controller;
