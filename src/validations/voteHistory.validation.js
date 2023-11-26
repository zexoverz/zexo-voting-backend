const Joi = require('joi');

const createVoteHistory = {
  body: Joi.object().keys({
    voters: Joi.string().required(),
    candidate: Joi.string().required(),
    round: Joi.number().required(),
    timestamp: Joi.number().required(),
  }),
};

module.exports = {
    createVoteHistory
};
