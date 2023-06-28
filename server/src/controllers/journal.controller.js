const { v4 } = require("uuid");

const JournalsModel = require("../schemes/journalsEntries.scheme");
const UserModel = require("../schemes/users.scheme");
const { default: mongoose } = require("mongoose");

const controller = {};

controller.getAllEntries = async (req, res) => {
  try {
    const currentUser = await UserModel.findById(req.params.id)
      .populate({
        path: "journalEntries",
        model: "journalsEntries",
      })
      .exec();

    const journalEntries = currentUser.journalEntries;

    return res.status(200).send(journalEntries[0]);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Error reading database" });
  }
};

controller.createEntry = async (req, res) => {
  try {
    const currentUser = await UserModel.findById(req.params.id);
    const {
      userId,
      journalEntryTitle,
      journalEntryCreation,
      journalEntryText,
      journalEntryEdited,
      journalEntryImgs,
    } = req.body;

    let journalCollection = await JournalsModel.findById(userId);

    if (!journalCollection) {
      // Crear nueva colección si no existe
      journalCollection = await JournalsModel.create({
        _id: new mongoose.Types.ObjectId(),
        userId,
        journalsEntries: [],
      });
    }

    const newEntry = {
      _id: v4(),
      journalEntryCreation,
      journalEntryEdited,
      journalEntryTitle,
      journalEntryText,
      journalEntryImgs,
    };
    console.log(journalCollection._id);
    await journalCollection.journalsEntries.unshift(newEntry);
    await journalCollection.save();
    await currentUser.journalEntries.unshift(journalCollection._id);
    await currentUser.save();
    return res.status(200).send({ message: "Entry created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Error creating entry" });
  }
};

module.exports = controller;
