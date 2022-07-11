const express = require('express');

const router = express.Router();


const userController = require('../controllers/user_controller');
router.get('/sign_up' , userController.signUp);
router.get('/sign_in' , userController.signIp);


router.get('/profile' , userController.profile);

module.exports = router;