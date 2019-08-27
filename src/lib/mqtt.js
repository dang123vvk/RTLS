const mqtt = require('mqtt');
var Topic = '#'; //subscribe to all topics
const db = require('../lib/db');
const { Node } = require('../models/node');

class MqttHandler {
  constructor() {
    this.mqttClient = null;
    this.host = 'mqtt://192.168.69.206:1883';
    this.username = ''; // mqtt credentials if these are needed to connect
    this.password = '';
  }

  connect() {
    // Connect mqtt with credentials (in case of needed, otherwise we can omit 2nd param)
    this.mqttClient = mqtt.connect(this.host, { clientId: "13c30a4de1cd45c396814208916d8369", qos: 1 });

    // Mqtt error calback
    this.mqttClient.on('error', (err) => {
      console.log(err);
      this.mqttClient.end();
    });

    // Connection callback
    this.mqttClient.on('connect', () => {
      console.log(`mqtt client connected`);
    });

    // mqtt subscriptions
    this.mqttClient.subscribe(Topic, { qos: 0 });

    // When a message arrives, console.log it
    this.mqttClient.on('message', function (topic, message) {
      // if(topic.toString()=="dwm/node/d99b/uplink/config")
      // {

      // }
      switch (topic.toString()) {
        case 'dwm/node/95b6/uplink/location':
          if ((JSON.parse(message.toString()).position.x) != "NaN") {
            var abc = JSON.parse(message.toString());
            var node = new Node({
              label: '95b6',
              nodeType: 'TAG',
              ble: 'false',
              lebs: 'false',
              uwbFirmwareUpdate: 'false',
              x: abc.position.x,
              y: abc.position.y,
              z: abc.position.z,
              quality: abc.position.quality
            })
            node.save().then((node) => {
              // console.log("Da save Tag" + node)
            });
            io.emit('topic', { 'topic': topic.toString(), 'me': message.toString(), time: Date() });
          }
          // console.log(message.toString());

          break;
        case 'dwm/node/d784/uplink/location':
          if ((JSON.parse(message.toString()).position.x) != "NaN") {
            var abc = JSON.parse(message.toString());
            var node = new Node({
              label: 'd784',
              nodeType: 'TAG',
              ble: 'false',
              lebs: 'false',
              uwbFirmwareUpdate: 'false',
              x: abc.position.x,
              y: abc.position.y,
              z: abc.position.z,
              quality: abc.position.quality
            })
            node.save().then((node) => {
              // console.log("Da save Tag" + node)
            });
            io.emit('topic', { 'topic': topic.toString(), 'me': message.toString(), time: Date() });
          }
          // console.log(message.toString());
          break;
        case 'dwm/node/0c9d/uplink/location':
          if ((JSON.parse(message.toString()).position.x) != "NaN") {
            var abc = JSON.parse(message.toString());
            var node = new Node({
              label: '0c9d',
              nodeType: 'TAG',
              ble: 'false',
              lebs: 'false',
              uwbFirmwareUpdate: 'false',
              x: abc.position.x,
              y: abc.position.y,
              z: abc.position.z,
              quality: abc.position.quality
            })
            node.save().then((node) => {
              // console.log("Da save Tag" + node)
            });
            io.emit('topic', { 'topic': topic.toString(), 'me': message.toString(), time: Date() });
          }
          // console.log(message.toString());
          break;
        case 'dwm/node/1294/uplink/location':
          if ((JSON.parse(message.toString()).position.x) != "NaN") {
            var abc = JSON.parse(message.toString());
            var node = new Node({
              label: '1294',
              nodeType: 'TAG',
              ble: 'false',
              lebs: 'false',
              uwbFirmwareUpdate: 'false',
              x: abc.position.x,
              y: abc.position.y,
              z: abc.position.z,
              quality: abc.position.quality
            })
            node.save().then((node) => {
              // console.log("Da save Tag" + node)
            });
            io.emit('topic', { 'topic': topic.toString(), 'me': message.toString(), time: Date() });
          }
          // console.log(message.toString());
          break;
        case 'dwm/node/521c/uplink/location':
          if ((JSON.parse(message.toString()).position.x) != "NaN") {
            var abc = JSON.parse(message.toString());
            var node = new Node({
              label: '521c',
              nodeType: 'TAG',
              ble: 'false',
              lebs: 'false',
              uwbFirmwareUpdate: 'false',
              x: abc.position.x,
              y: abc.position.y,
              z: abc.position.z,
              quality: abc.position.quality
            })
            node.save().then((node) => {
              // console.log("Da save Tag" + node)
            });
            io.emit('topic', { 'topic': topic.toString(), 'me': message.toString(), time: Date() });
          }
          // console.log(message.toString());
          break;
        
            case 'dwm/node/c586/uplink/location':
                if((JSON.parse(message.toString()).position.x) != "NaN") 
                {
                  var abc = JSON.parse(message.toString());
                  var node = new Node({
                    label: 'c586',
                    nodeType: 'TAG',
                    ble: 'false',
                    lebs: 'false',
                    uwbFirmwareUpdate: 'false',
                    x: abc.position.x,
                    y: abc.position.y,
                    z: abc.position.z,
                    quality: abc.position.quality
                  })
                  node.save().then((node) => {
                    // console.log("Da save Tag"+ node)
                  });
                  io.emit('topic', {'topic': topic.toString(), 'me': message.toString(),time: Date()});
                }
                // console.log(message.toString());
              break;
              case 'dwm/node/cba0/uplink/location':
                  if((JSON.parse(message.toString()).position.x) != "NaN") 
                  {
                    var abc = JSON.parse(message.toString());
                    var node = new Node({
                      label: 'cba0',
                      nodeType: 'TAG',
                      ble: 'false',
                      lebs: 'false',
                      uwbFirmwareUpdate: 'false',
                      x: abc.position.x,
                      y: abc.position.y,
                      z: abc.position.z,
                      quality: abc.position.quality
                    })
                    node.save().then((node) => {
                      // console.log("Da save Tag"+ node)
                    });
                    io.emit('topic', {'topic': topic.toString(), 'me': message.toString(),time: Date()});
                  }
                  console.log(message.toString());
                break;
        case 'dwm/node/d99b/uplink/config':
          var abc = JSON.parse(message.toString());
          var node = new Node({
            label: abc.configuration.label,
            nodeType: abc.configuration.nodeType,
            ble: abc.configuration.ble,
            lebs: abc.configuration.lebs,
            uwbFirmwareUpdate: abc.configuration.uwbFirmwareUpdate,
            x: abc.configuration.anchor.position.x,
            y: abc.configuration.anchor.position.y,
            z: abc.configuration.anchor.position.z,
            quality: abc.configuration.anchor.position.quality

          })
          Node.findOne({
            label: abc.configuration.label, x: abc.configuration.anchor.position.x,
            y: abc.configuration.anchor.position.y,
            z: abc.configuration.anchor.position.z
          }).then((nodess) => {
            if (nodess == null) {
              // console.log("KHONG TIM RA "+ nodess);
              Node.deleteMany({ label: abc.configuration.label });
              node.save().then((node) => {
              });
            }
            else {
              // console.log("Tim ra "+ nodess)
            }

          }, (e) => {
            // res.status(400).send(e);
          });

          io.emit('d99b', { 'me': message.toString(), time: Date() });
          // console.log(abc.configuration);
          break;
        case 'dwm/node/0c31/uplink/config':
          // code block
          var abc = JSON.parse(message.toString());
          var node = new Node({
            label: abc.configuration.label,
            nodeType: abc.configuration.nodeType,
            ble: abc.configuration.ble,
            lebs: abc.configuration.lebs,
            uwbFirmwareUpdate: abc.configuration.uwbFirmwareUpdate,
            x: abc.configuration.anchor.position.x,
            y: abc.configuration.anchor.position.y,
            z: abc.configuration.anchor.position.z,
            quality: abc.configuration.anchor.position.quality

          })
          Node.findOne({
            label: abc.configuration.label, x: abc.configuration.anchor.position.x,
            y: abc.configuration.anchor.position.y,
            z: abc.configuration.anchor.position.z
          }).then((nodess) => {
            if (nodess == null) {
              // console.log("KHONG TIM RA "+ nodess);
              Node.deleteMany({ label: abc.configuration.label });
              node.save().then((node) => {
              });
            }
            else {
              // console.log("Tim ra "+ nodess)
            }

          }, (e) => {
            // res.status(400).send(e);
          });
          io.emit('0c31', { 'me': message.toString(), time: Date() });
          // console.log(message.toString());
          break;
        case 'dwm/node/002b/uplink/config':
          // code block
          var abc = JSON.parse(message.toString());
          var node = new Node({
            label: abc.configuration.label,
            nodeType: abc.configuration.nodeType,
            ble: abc.configuration.ble,
            lebs: abc.configuration.lebs,
            uwbFirmwareUpdate: abc.configuration.uwbFirmwareUpdate,
            x: abc.configuration.anchor.position.x,
            y: abc.configuration.anchor.position.y,
            z: abc.configuration.anchor.position.z,
            quality: abc.configuration.anchor.position.quality

          })
          Node.findOne({
            label: abc.configuration.label, x: abc.configuration.anchor.position.x,
            y: abc.configuration.anchor.position.y,
            z: abc.configuration.anchor.position.z
          }).then((nodess) => {
            if (nodess == null) {
              // console.log("KHONG TIM RA "+ nodess);
              Node.deleteMany({ label: abc.configuration.label });
              node.save().then((node) => {
              });
            }
            else {
              // console.log("Tim ra "+ nodess)
            }

          }, (e) => {
            // res.status(400).send(e);
          });
          io.emit('002b', { 'me': message.toString(), time: Date() });
          // console.log(message.toString());
          break;
        case 'dwm/node/c586/uplink/config':
          // code block
          var abc = JSON.parse(message.toString());
          var node = new Node({
            label: abc.configuration.label,
            nodeType: abc.configuration.nodeType,
            ble: abc.configuration.ble,
            lebs: abc.configuration.lebs,
            uwbFirmwareUpdate: abc.configuration.uwbFirmwareUpdate,
            x: abc.configuration.anchor.position.x,
            y: abc.configuration.anchor.position.y,
            z: abc.configuration.anchor.position.z,
            quality: abc.configuration.anchor.position.quality

          })
          Node.findOne({
            label: abc.configuration.label, x: abc.configuration.anchor.position.x,
            y: abc.configuration.anchor.position.y,
            z: abc.configuration.anchor.position.z
          }).then((nodess) => {
            if (nodess == null) {
              // console.log("KHONG TIM RA "+ nodess);
              Node.deleteMany({ label: abc.configuration.label });
              node.save().then((node) => {
              });
            }
            else {
              // console.log("Tim ra "+ nodess)
            }

          }, (e) => {
            // res.status(400).send(e);
          });
          io.emit('c586', { 'me': message.toString(), time: Date() });

          break;
        default:
          // code block
          break;

      }
      // io.emit('topic', {'topic': topic.toString(), 'me': message.toString(),time: Date()});
      // console.log(topic.toString());
      // console.log(message.toString());
    });

    this.mqttClient.on('close', () => {
      console.log(`mqtt client disconnected`);
    });
  }

  // Sends a mqtt message to topic: mytopic
  sendMessage(message) {
    this.mqttClient.publish('mytopic', message);
  }
}

module.exports = MqttHandler;