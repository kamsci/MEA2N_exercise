var express = require('express');
var router = express.Router();
var passwordHash = require('password-hash');
var User = require('../models/user');

router.post('/', function(req, res, next) {
    // real app should submit password encrypted right away
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

module.exports = router;