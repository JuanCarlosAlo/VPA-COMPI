const { v4 } = require("uuid");


const UserModel = require("../schemes/users.scheme");
const { default: mongoose } = require("mongoose");
const NotesModel = require("../schemes/notes.scheme");

const controller = {};

controller.getAllNotes = async (req, res) => {
  try {
    const currentUser = await UserModel.findById(req.params.id)
      .populate({
        path: "notes",
        model: "notes",
      })
      .exec();

    const notes = currentUser.notes;

    return res.status(200).send(notes[0]);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Error reading database" });
  }
};

controller.createNote = async (req, res) => {
  try {
    const currentUser = await UserModel.findById(req.params.id);
    const {
      userId,
      noteCreation,
      noteText,
      noteTitle,
    } = req.body;

    let notesCollection = await NotesModel.findOne({ userId: userId });

    if (!notesCollection) {
      // Crear nueva colección si no existe
      notesCollection = await NotesModel.create({
        _id: new mongoose.Types.ObjectId(),
        userId,
        notes: [],
      });
    }

    const newNote = {
      _id: v4(),
      noteCreation,
      noteText,
      noteTitle,
    };
    notesCollection.notes.unshift(newNote);
    await notesCollection.save();

    // Verificar si la referencia ya existe en currentUser.notes
    const existingNoteRef = currentUser.notes.find(
      (noteRef) => noteRef.toString() === notesCollection._id.toString()
    );

    if (!existingNoteRef) {
      currentUser.notes.unshift(notesCollection._id);
      await currentUser.save();
    }

    return res.status(200).send({ message: "Entry created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Error creating entry" });
  }
};

controller.editNote = async (req, res) => {
  try {
    const {
      _id,
      noteTitle,
      noteText
    } = req.body;

    const result = await NotesModel.findOneAndUpdate(
      {
        userId: req.params.id,
      },
      {
        $set: {
          'notes.$[note].noteTitle': noteTitle,
          'notes.$[note].noteText': noteText
        },
      },
      {
        arrayFilters: [{ 'note._id': _id }],
        new: true, // Devuelve el documento actualizado
      }
    );

    if (!result) {
      return res.status(404).send({ error: "Entry not found" });
    }

    return res.status(200).send({ message: "Entry edited successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Error editing entry" });
  }
};


controller.deleteNote = async (req, res) => {
  try {
    const { id } = req.body;

    const result = await NotesModel.findOneAndUpdate(
      {
        userId: req.params.id,
      },
      {
        $pull: {
          notes: { _id: id },
        },
      },
      {
        new: true, // Devuelve el documento actualizado
      }
    );

    if (!result) {
      return res.status(404).send({ error: "Entry not found" });
    }

    return res.status(200).send({ message: "Entry deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Error deleting entry" });
  }
};

module.exports = controller;
