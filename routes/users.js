const express = require('express');

const router = express.Router();
const passport = require('passport')

const userController = require('../controllers/user_controller');
router.get('/sign_up' , userController.signUp);
router.get('/sign_in' , userController.signIp);

router.post('/create' , userController.create);

router.get('/profile' , userController.profile);

router.post('/session' , passport.authenticate('local' , 
     {failureRedirect: '/user/sign_in'},)
  ,userController.create)

module.exports = router;