var express = require('express');
var router = express.Router();
var passwordHash = require('password-hash');
var jwt = require('jsonwebtoken');

var User = require('../models/user');

router.post('/', function(req, res, next) {
    // NOTE: real app should submit password encrypted right away!!
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: passwordHash.generate(req.body.password),
        email: req.body.email
    });
    user.save(function(err, result) {
        if (err) {
            return res.status(404).json({
                title: "Error in creating new user",
                error: err.message,
            });
        };
            res.status(200).json({
                title: "New User Created Successfuly",
                result: result 
            });
    })
})

router.post('/login', function(req, res, next) {
    User.findOne({ email: req.body.email }, function(err, data) {
        if (err) {
            return res.status(404).json({
                title: "Error logging in",
                error: err.message,
            });
        }
        if(!data) {
            return res.status(404).json({
                title: "Login Success",
                error: {message: "Login Success"}
            });
        }
        if(!passwordHash.verify(req.body.password, data.password)){
            return res.status(404).json({
                title: "Invalid password",
                error: {message: "Invalid password"}
            });
        }
        var token = jwt.sign({ user: data }, 'supers1cre3tke7$ndstuff', { expiresIn: 7200 });
        res.status(200).json({
            message: "Success",
            token: token,
            userId: data._id
        })
    });
})

module.exports = router;