'use strict';
const Router = require('express');
const userController = require('../controllers/user-controller');
const auth = require('../middleware/auth-middleware');
const {
  regUserRules,
  loginUserRules } = require('../utils/validate-rules');
const validate = require('../middleware/validation-middleware');
const router = new Router();

router.post('/registration',
  regUserRules, validate, userController.registrarion);
router.post('/login',
  loginUserRules, validate, userController.login);
router.get('/logout', validate, userController.logout);
router.get('/refresh', validate, userController.refresh);
router.delete('/delete', auth, userController.delete);

module.exports = router;
