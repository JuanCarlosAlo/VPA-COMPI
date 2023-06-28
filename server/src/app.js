const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const { Server } = require("socket.io");
const httpServer = require("http").createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET,POST"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  },
});

// Rutas
const usersRoutes = require("./routes/users.routes");
const journalRoutes = require("./routes/journal.routes");

// Middlewares
app.use(cors());
app.use(express.json());

// Configuración de conexión a MongoDB
const uri = process.env.MONGODB_URL;
const client = new MongoClient(uri);
mongoose.set("strictQuery", false);

// Maneja la conexión de Socket.io
io.on("connection", (socket) => {
  console.log("Cliente conectado");

  // Maneja la solicitud de cambio de colección
  socket.on("startCollectionListener", () => {
    // Establece el cambio de flujo (change stream) en la colección de usuarios
    const collectionUsers = client.db("VPA-COMPI").collection("users");
    const changeUsers = collectionUsers.watch();

    // Escucha los eventos de cambio en el flujo y los emite a través del socket
    changeUsers.on("change", (change) => {
      socket.emit("collectionChange", change);
    });
  });

  // Maneja la desconexión del cliente
  socket.on("disconnect", () => {
    console.log("Cliente desconectado");
  });
});

// Rutas
app.use("/users", usersRoutes);
app.use("/journal", journalRoutes);

// Inicia el servidor
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Conectado a la base de datos");

    httpServer.listen(process.env.PORT, () => {
      console.log(`Servidor en ejecución en el puerto ${process.env.PORT}`);
    });

    io.listen(process.env.SOCKET_IO_PORT, () => {
      console.log(
        `Servidor de Socket.io en ejecución en el puerto ${process.env.SOCKET_IO_PORT}`
      );
    });
  } catch (err) {
    console.error("Error de conexión");
  }
};

startServer();
