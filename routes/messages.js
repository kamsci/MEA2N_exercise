var express = require('express');
var router = express.Router();
var Message = require('../models/message');

router.get('/', function(req, res, next) {
    Message.find()
    // execute all queries appended before this .exec method
    .exec(function(err, result) {
        if (err) {
            return res.status(404).json({
                title: "Error in get messages",
                error: err
            });
        };
        res.status(200).json({
            title: "Get Messages success",
            result: result
        });
    });
})

router.post('/', function(req, res, next) {
    var message = new Message({
        content: req.body.content
    })
    message.save(function(err, result) {
        if (err) {
            return res.status(404).json({
                title: "Error in save message",
                error: err.message,
            });
        };
        res.status(200).json({
            title: "Save success",
            result: result
        });
    });
});

// Patch to update parts and not replace, Put to override/replace
router.patch('/:id', function(req, res, next) {
    Message.findById(req.params.id, function (err, data) {
        if (err) {
            return res.status(404).json({
                title: "Error in edit message",
                error: err.message,
            });
        }
        if(!data) {
            return res.status(404).json({
                title: "Message was not found",
                error: {message: "Message could not be found"}
            });
        }
        data.content = req.body.content;
        data.save(function(err, result) {
            if (err) {
            return res.status(404).json({
                title: "Error in saving edited message",
                error: err.message,
            });
        };
            res.status(200).json({
                title: "Edit success",
                result: result 
            });
        });
    });
});

router.delete('/:id', function(req, res, next) {
    Message.findById(req.params.id, function (err, data) {
        if (err) {
            return res.status(404).json({
                title: "Error in delete message",
                error: err.message,
            });
        }
        if(!data) {
            return res.status(404).json({
                title: "Message was not found",
                error: {message: "Message could not be found"}
            });
        }
        data.remove(function(err, result) {
            if (err) {
            return res.status(404).json({
                title: "Error in deleting message",
                error: err.message,
            });
        };
            res.status(200).json({
                title: "Delete success",
                result: result 
            });
        });
    });
});

module.exports = router;