'use strict';
const Router = require('express');
const userController = require('../controllers/user-controller');
const auth = require('../middleware/auth-middleware');
const router = new Router();

router.post('/registration', userController.registrarion);
router.post('/login', userController.login);
router.get('/logout', userController.logout);
router.get('/refresh', userController.refresh);
router.delete('/delete', auth, userController.delete);

module.exports = router;
