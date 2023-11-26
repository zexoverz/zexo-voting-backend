const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { voteHistoryService } = require('../services');

const createVoteHistory = catchAsync(async (req, res) => {
  const voteHistory = await voteHistoryService.createVoteHistory(req.body);

  res.status(httpStatus.CREATED).send({
    status: httpStatus.CREATED,
    message: "Create Vote History Success",
    data: voteHistory
  });
});

const getVoteHistory = catchAsync(async (req, res) => {
  const result = await voteHistoryService.queryVoteHistory();
  
  res.status(httpStatus.OK).send({
    status: httpStatus.OK,
    message: "Get Vote History Success",
    data: result
  });
});


module.exports = {
    createVoteHistory,
    getVoteHistory,
};
