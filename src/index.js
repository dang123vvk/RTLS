const express = require('express');
const bodyParser = require('body-parser')
const db = require('./lib/db');
const http = require('http');
const socketIO = require('socket.io');

const app = express();

let allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
}
app.use(allowCrossDomain);
const PORT = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//Routes
app.use(require('./routes/index'));
app.use(require('./routes/authentication'));
app.use('/mqtt', require('./routes/mqtt'));
app.use('/user', require('./routes/user'));
app.use('/node', require('./routes/node'));
const server = http.createServer(app);
global.io = socketIO(server)

// This is what the socket.io syntax is like, we will work this later
io.on('connection', socket => {
  console.log('User connected')
  socket.emit('message', {'message': 'hello world'});
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

server.listen(PORT, () => console.log(`Listening on ${ PORT }`));

