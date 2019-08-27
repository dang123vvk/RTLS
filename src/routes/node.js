const express = require('express');
const router = express.Router();
const db = require('../lib/db');
const helpers = require('../lib/helpers')
const { Node } = require('../models/node');
const jwt = require("jsonwebtoken");
const { verifyToken } = require('../lib/verifytoken');

//Get all user with administrator permission
router.get('/', async (req, res) => {
    Node.find().then((nodes) => {
        res.send({
            nodes: nodes
        });
    });
});

module.exports = router;