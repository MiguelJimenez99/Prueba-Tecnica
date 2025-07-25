const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  document: { type: Number, required: true, unique: true },
  party: { type: String },
  votes: { type: Number, default: 0 },
});

const Candidate = mongoose.model("Candidate", candidateSchema);

module.exports = Candidate;
