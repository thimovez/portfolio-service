'use strict';
const Router = require('express');
const multer  = require('multer');
const portfolioController = require('../controllers/portfolio-controller');
const auth = require('../middleware/auth-middleware');
const router = new Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', auth, upload.array('images', 2),
  portfolioController.createPortfolio);
router.post('/:id', auth, upload.array('images', 2),
  portfolioController.UploadImagesByID);
router.delete('/:id', auth, portfolioController.DeletePortfolio);
router.delete('/image/:id', auth, portfolioController.DeleteImage);


module.exports = router;
