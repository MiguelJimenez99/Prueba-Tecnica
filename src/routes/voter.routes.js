const express = require("express");
const router = express.Router();

const {
  getAllVoters,
  getVoter,
  postVoter,
  deleteVoter,
} = require("../controllers/voters.controller");


router.get("/voters", getAllVoters);
router.get("/voters/:id", getVoter);
router.post("/voters", postVoter);
router.delete("/voters/:id", deleteVoter);

module.exports = router;
