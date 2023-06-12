
const Router = require('express');
const router = new Router();
const userRouter = require('./user-routes');
const portfolioRouter = require('./portfolio-router');

router.use('/user', userRouter);
router.use('/portfolio', portfolioRouter);

module.exports = router;
