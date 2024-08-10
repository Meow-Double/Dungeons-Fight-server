const Router = require('express');
const userController = require('../controllers/user.controller');
const router = new Router();

router.post('/registration', userController.regestration);
router.post('/login');
router.get('/auth');

module.exports = router;
