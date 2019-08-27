const express = require('express');
const router = express.Router();
var mqttHandler = require('../lib/mqtt');

var mqttClient = new mqttHandler();
mqttClient.connect();
router.post("/send-mqtt", function(req, res) {
    mqttClient.sendMessage(req.body.message);
    res.status(200).send("Message sent to mqtt");
  });

  
module.exports = router;