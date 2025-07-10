const mongoose = require("mongoose");

const voterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  has_voted: { type: Boolean, default: false },
});

const Voter = mongoose.model("Voter", voterSchema);

module.exports = Voter;
