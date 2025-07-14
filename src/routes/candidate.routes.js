const express = require("express");
const router = express.Router();

const {
  getAllCandidates,
  getCandidate,
  postCandidate,
  deleteCandidate,
} = require("../controllers/candidates.controller");

const { validatorCandidates } = require("../validators/validators");
const validate = require("../middleware/validators.middleware");

router.get("/candidates", getAllCandidates);
router.get("/candidates/:id", getCandidate);
router.post("/candidates", validatorCandidates, validate, postCandidate);
router.delete("/candidates/:id", deleteCandidate);

module.exports = router;
