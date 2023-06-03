'use strict';
const Router = require('express');
const multer  = require('multer');
const portfolioController = require('../controllers/portfolio-controller');
const auth = require('../middleware/auth-middleware');
const router = new Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', auth, upload.single('image'),
  portfolioController.createPortfolio);

module.exports = router;
