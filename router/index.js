'use strict';
const Router = require('express');
const router = new Router();
const userRouter = require('./user-routes');
const portfolioRouter = require('./portfolio-router');

router.get('*', (req, res) => {
  res.status(404).send('Not found');
});
router.use('/user', userRouter);
router.use('/portfolio', portfolioRouter);

module.exports = router;
