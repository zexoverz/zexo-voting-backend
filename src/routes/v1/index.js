const express = require('express');
const voteHistoryRoute = require('./voteHistory.route');
const router = express.Router();

const defaultRoutes = [
  {
    path: '/vote-history',
    route: voteHistoryRoute,
  },
];


defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
