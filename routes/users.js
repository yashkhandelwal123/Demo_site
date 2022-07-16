const express = require('express');

const router = express.Router();


const userController = require('../controllers/user_controller');

router.get('/profile', userController.profile);

router.get('/sign_up' , userController.signUp);
router.get('/sign_in' , userController.signIp);

router.post('/create' , userController.create);
router.post('/session' , userController.session);



module.exports = router;