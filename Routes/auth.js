const {body} = require('express-validator/check');
const express = require('express');
const User = require('../Models/User');
const authController = require('../Controllers/Auth');


const router = express.Router();

router.put('/signup', [
body('email')
.isEmail()
.custom((value, {req}) => {
    return User.findOne({email: value}).then(userDoc => {
        if(userDoc){
            return Promise.reject('Email address already exists!');
        }
    });
})
],
authController.signup
);



router.put('/login', authController.getLogin);

module.exports = router;