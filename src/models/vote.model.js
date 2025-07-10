const mongoose = require("mongoose");

const voteShema = new mongoose.Schema({
  voter_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Voter",
    required: true,
  },
  candidate_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Candidate",
    required: true,
  },
});

const Vote = mongoose.model("Vote", voteShema);

module.exports = Vote;
