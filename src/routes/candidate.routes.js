const express = require("express");
const router = express.Router();

const {
  getAllCandidates,
  getCandidate,
  postCandidate,
  deleteCandidate,
} = require("../controllers/candidates.controller");

router.get("/candidates", getAllCandidates);
router.get("/candidates/:id", getCandidate);
router.post("/candidates", postCandidate);
router.delete("/candidates/:id", deleteCandidate);

module.exports = router;
