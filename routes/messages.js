var express = require('express');
var router = express.Router();
var Message = require('../models/message');

router.get('/', function(req, res, next) {
    Message.find()
    // execute all queries appended before this .exec method
    .exec(function(err, data) {
        if (err) {
            return res.status(404).json({
                title: "Error in get messages",
                error: err
            });
        };
        res.status(200).json({
            title: "Get Messages success",
            result: data
        });
    });
})

router.post('/', function(req, res, next) {
    var message = new Message({
        content: req.body.content
    })
    message.save(function(err, data) {
        if (err) {
            return res.status(404).json({
                title: "Error in save message",
                error: err.message,
            });
        };
        res.status(201).json({
            title: "Save success",
            result: data
        });
    });
});

module.exports = router;