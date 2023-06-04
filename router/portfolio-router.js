'use strict';
const Router = require('express');
const multer  = require('multer');
const portfolioController = require('../controllers/portfolio-controller');
const auth = require('../middleware/auth-middleware');
const router = new Router();
const upload = multer({ dest: 'uploads/' });
const {
  portfolioRules,
  uploadRules,
  deleteRules } = require('../utils/validate-rules');
const validate = require('../middleware/validation-middleware');

router.get('/', portfolioController.GetImage);
router.post('/', auth, upload.array('images', 2), portfolioRules, validate,
  portfolioController.createPortfolio);
router.post('/:id', auth, upload.array('images', 2), uploadRules, validate,
  portfolioController.UploadImagesByID);
router.delete('/:id', auth, deleteRules, validate,
  portfolioController.DeletePortfolio);
router.delete('/image/:id', auth, deleteRules, validate,
  portfolioController.DeleteImage);


module.exports = router;
