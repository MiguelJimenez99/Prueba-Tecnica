const express = require("express");
const router = express.Router();

const {
  getAllVoters,
  getVoter,
  postVoter,
  deleteVoter,
} = require("../controllers/voters.controller");

const validate = require("../middleware/validators.middleware");
const { validatorVoters } = require("../validators/validators");

router.get("/voters", getAllVoters);
router.get("/voters/:id", getVoter);
router.post("/voters", validatorVoters, validate, postVoter);
router.delete("/voters/:id", deleteVoter);

module.exports = router;
