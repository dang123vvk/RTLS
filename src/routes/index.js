const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.send({
        message :'Welcome to server Real Time Location System'
    })
});

module.exports = router;