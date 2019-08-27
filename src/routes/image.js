const express = require('express');
const router = express.Router();
const db = require('../lib/db');
const helpers = require('../lib/helpers')
const { Image } = require('../models/image');
const jwt = require("jsonwebtoken");
const { verifyToken } = require('../lib/verifytoken');

router.post('/', async (req, res) => {
    const { name, location, type, base64 } = req.body;
        const image = new Image({
          name: name,
          location: location,
          type: type,
          base64: base64
        });
        image.save().then((image) => {
          res.send(image);
        }, (e) => {
          res.status(400).send(e);
        });
});
router.get('/', async (req, res) => {
    Image.find().then((images) => {
        res.send({
            images: images
        });
    });
});

module.exports = router;