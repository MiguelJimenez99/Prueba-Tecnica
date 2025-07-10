const Vote = require("../models/vote.model");
const Voter = require("../models/voter.model");
const Candidate = require("../models/candidate.model");

//controlador para obtener todos los votos registrados
exports.getAllVotes = async (req, res) => {
  try {
    const votes = await Vote.find()
      .populate("voter_id", "name email")
      .populate("candidate_id", "name party");

    if (votes == "" || votes.length == 0) {
      return res.status(400).json({
        message: "No hay votos registrados",
        votes: [],
      });
    }

    res.status(200).json({
      message: "Votos encontrados",
      votes,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error en el servidor",
      error: error.message,
    });
  }
};

//controaldor para obtner las estadisticas de las votaciones
exports.getVotesStatistics = async (req, res) => {
  try {
    const votes = await Vote.find().populate("candidate_id", "name");

    const totalVotes = votes.length;
    const totalVotersVoted = await Voter.countDocuments({ has_voted: true });

    // saca el total de votos obtenido por candidatos
    const votesByCandidate = {};

    votes.forEach((vote) => {
      const name = vote.candidate_id.name;
      if (!votesByCandidate[name]) {
        votesByCandidate[name] = 0;
      }
      votesByCandidate[name] += 1;
    });

    // se calcula el porcentaje de votacion de cada candidato
    const percentageCandidate = {};

    for (let candidate in votesByCandidate) {
      const count = votesByCandidate[candidate];
      percentageCandidate[candidate] =
        ((count / totalVotes) * 100).toFixed(2) + "%";
    }

    res.status(200).json({
      message: "Estadistica optenidas correctamente",
      statistics: {
        votesByCandidate,
        percentageCandidate,
        totalVotersVoted,
      }
    });
  } catch (error) {
    res.status(500).json({
      message: "Error en el servidor",
      error: error.message,
    });
  }
};

// controlador para crear una nueva votacion utilizando los id del candidato y del votante.
// se verifica que antes de realizar la peticion los diferentes id no vayan vacios
// y que los id existan dentro de la base de datos, tambien se verifica que el votante haya votado
// o no.
// y si la peticion se cumple sin error se guarda en la base de datos y se actualiza los diferentes campos de
// los diferentes modelos.
exports.postVotes = async (req, res) => {
  try {
    const { voter_id, candidate_id } = req.body;

    if (!voter_id || !candidate_id) {
      return res.status(400).json({
        message: "Los dos Id son requeridos",
      });
    }

    const voter = await Voter.findById(voter_id);

    if (!voter) {
      return res.status(404).json({
        message: "Votante no encontrado",
      });
    }

    const candidate = await Candidate.findById(candidate_id);

    if (!candidate) {
      return res.status(404).json({
        message: "Candidato no encontrado",
      });
    }

    if (voter.has_voted) {
      return res.status(400).json({
        message: "El votante ya voto",
      });
    }

    const newVote = new Vote({
      voter_id,
      candidate_id,
    });

    await newVote.save();

    voter.has_voted = true;
    await voter.save();

    candidate.votes += 1;
    await candidate.save();

    res.status(201).json({ message: "Voto registrado correctamente" });
  } catch (error) {
    res.status(500).json({
      message: "Error en el servidor",
      error: error.message,
    });
  }
};
