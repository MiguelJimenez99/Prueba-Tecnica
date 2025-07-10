const express = require("express");
const router = express.Router();

const {
  getVotesStatistics,
  getAllVotes,
  postVotes,
} = require("../controllers/votes.controller");

router.get("/votes", getAllVotes);
router.get("/votes/statistics", getVotesStatistics);
router.post("/votes", postVotes);

module.exports = router;
