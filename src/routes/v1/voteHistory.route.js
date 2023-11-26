const express = require('express');
const validate = require('../../middlewares/validate');
const voteHistoryValidation = require('../../validations/voteHistory.validation');
const voteHistoryController = require('../../controllers/voteHistory.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(voteHistoryValidation.createVoteHistory), voteHistoryController.createVoteHistory)
  .get(voteHistoryController.getVoteHistory);

module.exports = router;