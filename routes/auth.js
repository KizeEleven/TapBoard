const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const MongooseUser = require('../models/user.mongoose');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

const config = require('../config/token.js');
const verifyToken = require('../models/verify.token');

router.post('/users', (req, res) => {

    const hashedPassword = bcrypt.hashSync(req.body.password, 8);

    MongooseUser.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: hashedPassword,
    },
    (err, user) => {
        if (err) return res.status(500).send('A problem was occured');

        const token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: 86400,
        });

        res.status(200).send({ auth: true, token: token });
    });
})

router.post('/login', (req, res) => {
    MongooseUser.findOne({ email: req.body.email }, (err, user) => {
        if (err) return res.status(500).send('Error');
        if (!user) return res.status(404).send('User not found.');

        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if(!passwordIsValid) return res.status(401).send({ auth: false, token: null });

        const token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: 86400,
        });

        res.status(200).send({ auth: true, token: token });
    });
});
module.exports = router;
