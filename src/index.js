const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const voterRouter = require("./routes/voter.routes");
const candidateRouter = require("./routes/candidate.routes");
const voteRouter = require("./routes/vote.routes");

app.use("/api", voterRouter);
app.use("/api", candidateRouter);
app.use("/api", voteRouter);

const MONGO_URL =  process.env.URL_DATABASE;

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB conectado correctamente"))
  .catch((err) => console.log("Error al establecer la coneccion", err));

const PUERTO = process.env.PUERTO;

app.listen(PUERTO, () => {
  console.log(`Servidor corriendo en el puerto: ${PUERTO}`);
});
