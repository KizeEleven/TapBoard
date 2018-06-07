const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const MongooseUser = require('../models/user.mongoose');
const MongooseScore = require('../models/score.mongoose');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

const config = require('../config/token.js');
const verifyToken = require('../models/verify.token');

router.post('/tap', verifyToken, (req, res) => {

    MongooseUser.findOne({ _id: req.userId }, (err, user) => {

        if (err) return res.status(500).send('Error');
        if (!user) return res.status(404).send('User not found.');
        MongooseScore.create({
            points: req.body.points,
            user: user,
        },
        (err, score) => {
            if (err) return res.status(500).send('A problem was occured');
            res.status(200).send({ status: 'ok' });
        });
    });
})

router.get('/scores', verifyToken, (req, res) => {
    MongooseScore.find((err, scores) => {
        if (err) return res.status(500).send("There was a problem finding scores.");
        if (!scores) return res.status(404).send("No scores found.");
    })
    .populate('user', 'firstname lastname')
    .sort('-date').exec(function(err, scores) {
        res.status(200).send(scores);
    });
});

module.exports = router;
