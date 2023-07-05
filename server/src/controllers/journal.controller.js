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

    let journalCollection = await JournalsModel.findOne({ userId: userId });

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

controller.editEntry = async (req, res) => {
  try {
    const {
      _id,
      journalEntryTitle,
      journalEntryCreation,
      journalEntryText,
      journalEntryEdited,
      journalEntryImgs,
    } = req.body;

    const result = await JournalsModel.findOneAndUpdate(
      {
        userId: req.params.id,
      },
      {
        $set: {
          'journalsEntries.$[entry].journalEntryTitle': journalEntryTitle,
          'journalsEntries.$[entry].journalEntryCreation': journalEntryCreation,
          'journalsEntries.$[entry].journalEntryText': journalEntryText,
          'journalsEntries.$[entry].journalEntryEdited': journalEntryEdited,
          'journalsEntries.$[entry].journalEntryImgs': journalEntryImgs,
        },
      },
      {
        arrayFilters: [{ 'entry._id': _id }],
        new: true, // Devuelve el documento actualizado
      }
    );

    if (!result) {
      return res.status(404).send({ error: "Entry not found" });
    }
    await result.save()


    return res.status(200).send({ message: "Entry edited successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Error editing entry" });
  }
};

module.exports = controller;
