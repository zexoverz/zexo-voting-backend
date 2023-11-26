const prisma = require('../../prisma/client')
/**
 * Create a vote history
 * @param {Object} dataBody
 * @returns {Promise<VoteHistory>}
 */
const createVoteHistory = async (dataBody) => {

  return prisma.voteHistory.create({
    data: dataBody
  });
};

/**
 * Query for vote history
 * @returns {Promise<QueryResult>}
 */
const queryVoteHistory = async () => {
  const result = await prisma.voteHistory.findMany({
    orderBy: [
        {
            timestamp: 'desc'
        }
    ]
  });
  return result;
};


module.exports = {
  createVoteHistory,
  queryVoteHistory
};
