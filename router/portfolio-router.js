'use strict';
const Router = require('express');
const portfolioController = require('../controllers/portfolio-controller');
const auth = require('../middleware/auth-middleware');
const router = new Router();

router.post('/', auth, portfolioController.createPortfolio);

module.exports = router;
