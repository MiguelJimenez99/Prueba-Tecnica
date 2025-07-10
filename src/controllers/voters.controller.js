const validator = require("validator");

const Voter = require("../models/voter.model");
const Candidate = require("../models/candidate.model");

// controlador para obtener los datos de todos los votantes registrados
exports.getAllVoters = async (req, res) => {
  try {
    const voters = await Voter.find();

    if (voters == "" || voters.length == 0) {
      return res.status(400).json({
        message: "No hay votantes registrados",
        voters: [],
      });
    }
    res.status(200).json({
      message: "Votantes obtenidos correctamente",
      voters,
    });
  } catch (error) {
    res.status(500).json({
      message: "error en el servidor",
      error: error.message,
    });
  }
};

// controlador para obtener los datos de un solo votante mediante el id
exports.getVoter = async (req, res) => {
  try {
    const voterId = req.params.id;

    const voter = await Voter.findById(voterId);

    if (!voter) {
      return res.status(400).json({
        message: "Votante no se encuentra registrado",
      });
    }

    res.status(200).json({
      message: "detalles del votante obtenidos correctamente",
      voter,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error en el servidor",
      error: error.message,
    });
  }
};

// controlador para crear un nuevo votante
exports.postVoter = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        message: "Todos los datos son requeridos",
      });
    }

    //validamos que el correo sea valido
    const emailValidator = validator.isEmail(email);

    if (!emailValidator) {
      return res.status(400).json({
        message: "Ingrese un correo valido",
      });
    }

    //verifico que el votante ya esta registrado
    const isVotersExists = await Voter.findOne({ email });
    if (isVotersExists) {
      return res.status(400).json({
        message: "El votante ya esta registrado",
      });
    }

    // verificar si el votante esta registrado como candidato, validacion por medio de nombre
    const isCandidate = await Candidate.findOne({
      name: { $regex: new RegExp(`^${name}$`, "i") },
    });

    if (isCandidate) {
      return res.status(400).json({
        message: "El votante ya esta registrado como candidato",
      });
    }

    // se crea el nuevo votante si no esta registrado con candidato
    const newVoter = new Voter({ name, email });
    await newVoter.save();

    res.status(201).json({
      message: "Nuevo votante registrado correctamente",
      voter: newVoter,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error en el servidor",
      error: error.message,
    });
  }
};

//controlador para eliminar el votante
exports.deleteVoter = async (req, res) => {
  try {
    const voterId = req.params.id;

    const voter = await Voter.findById(voterId);

    if (!voter) {
      return res.status(400).json({
        message: "Error al eliminar, votante no registrado",
      });
    }

    await Voter.findByIdAndDelete(voterId);
    res.status(200).json({
      message: "Votante eliminado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error en el servidor",
      error: error.message,
    });
  }
};
