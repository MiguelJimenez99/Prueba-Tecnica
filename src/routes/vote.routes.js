const express = require("express");
const router = express.Router();

const {
  getVotesStatistics,
  getAllVotes,
  postVotes,
} = require("../controllers/votes.controller");

const { verifyToken } = require("../middleware/auth.voter.middleware");

router.get("/votes", getAllVotes);
router.get("/votes/statistics", getVotesStatistics);
router.post("/votes", verifyToken, postVotes);

module.exports = router;
