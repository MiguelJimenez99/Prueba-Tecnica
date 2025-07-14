const Candidate = require("../models/candidate.model");
const Voter = require("../models/voter.model");

// controlador para obtener los datos de todos los candidatos registrados
exports.getAllCandidates = async (req, res) => {
  try {
    const candidate = await Candidate.find();

    if (candidate == "" || candidate.length == 0) {
      return res.status(400).json({
        message: "No hay candidatos registrados",
        candidates: [],
      });
    }
    res.status(200).json({
      message: "Candidatos obtenidos correctamente",
      candidates: candidate,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error en el servidor",
      error: error.message,
    });
  }
};

// controlado para obtener los datos de un candiadto mediante el id
exports.getCandidate = async (req, res) => {
  try {
    const candidateId = req.params.id;

    const candidate = await Candidate.findById(candidateId);

    if (!candidate) {
      return res.status(400).json({
        message: "El candidato no se encuentra registrado",
      });
    }

    res.status(200).json({
      message: "Detalles del candidato obtenido correctamente",
      candidate: candidate,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error en el servidor",
      error: error.message,
    });
  }
};

// controlador para crear un nuevo candidato
exports.postCandidate = async (req, res) => {
  try {
    const { name, document, party } = req.body;

    if (!name || !document) {
      return res.status(403).json({
        message: "Todos los campos son requeridos",
      });
    }

    // se valida que el candidato ya esta registrado
    const candidateExist = await Candidate.findOne({ document });

    if (candidateExist) {
      return res.status(400).json({
        message: "El candidato ya esta registrado",
      });
    }

    // se valida que el candidato no esta registrado como votante mediante el nombre
    const isVoter = await Voter.findOne({ document });

    if (isVoter) {
      return res.status(400).json({
        message: "El usuario ya esta registrado como votante",
      });
    }

    // se crea el nuevo candidato si no esta registrado como votante
    const newCandidate = new Candidate({
      name,
      document,
      party,
    });

    await newCandidate.save();

    res.status(200).json({
      message: "Candidato creado correctamente",
      candidate: newCandidate,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error en el servidor",
      error: error.message,
    });
  }
};

// controlador para eliminar un candidato por id
exports.deleteCandidate = async (req, res) => {
  try {
    const candidateId = req.params.id;
    const candidate = await Candidate.findById(candidateId);

    if (!candidate) {
      return res.status(400).json({
        message: "Error al eliminar, candidato no registrado",
      });
    }

    await Candidate.findByIdAndDelete(candidateId);

    res.status(200).json({
      message: "Candidato eliminado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error en el servidor",
      error: error.message,
    });
  }
};
