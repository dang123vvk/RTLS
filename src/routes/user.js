const express = require('express');
const router = express.Router();
const db = require('../lib/db');
const helpers = require('../lib/helpers')
const { User } = require('../models/user');
const jwt = require("jsonwebtoken");
const { verifyToken } = require('../lib/verifytoken');

//Get all user with administrator permission
router.get('/', verifyToken, async (req, res) => {
  jwt.verify(req.token, 'secretkey', (err) => {
    if (err) {
      res.sendStatus(403);
    } else {
      User.find().then((user) => {
        res.send({
          user
        });
      }, (e) => {
        res.status(400).send(e);
      });
    }
  });
});
//Create an user 
router.post('/add', verifyToken, async (req, res) => {
  const { userfullname, username, email, password, role } = req.body;
  const hashpassword = await helpers.encryptPassword(password);
  jwt.verify(req.token, 'secretkey', (err) => {
    if (err) {
      res.sendStatus(403);
    } else {
      const user = new User({
        userfullname: userfullname,
        username: username,
        email: email,
        password: hashpassword,
        role: role
      });
      user.save().then((user) => {
        res.send(user);
      }, (e) => {
        res.status(400).send(e);
      });
    }
  });
});
//Create admin
router.post('/add/admin', async (req, res) => {
  const  userfullname = "Admin";
  const  username = "admin";
  const email = "admin@gmail.com";
  const password = "admin";
  const role = "admin";
  const hashpassword = await helpers.encryptPassword(password);
      const user = new User({
        userfullname: userfullname,
        username: username,
        email: email,
        password: hashpassword,
        role: role
      });
      user.save().then((user) => {
        res.send(user);
      }, (e) => {
        res.status(400).send(e);
      });
});
//Get an user with parameter username
router.get('/:username', async (req, res) => {
  const { username } = req.params;
  jwt.verify(req.token, 'secretkey', (err) => {
    if (err) {
      res.sendStatus(403);
    } else {
      User.findOne({ username: username }).then((user) => {
        res.send(user);
      }, (e) => {
        res.status(400).send(e);
      });
    }
  });
});
//Edit an user
router.put('/:username', (req, res) => {
  const query = { username: req.params.username };
  jwt.verify(req.token, 'secretkey', (err) => {
    if (err) {
      res.sendStatus(403);
    } else {
      User.findOneAndUpdate(query, {
        role: req.body.role,
        password: req.body.password
      }, { upsert: true }, (e, raw) => {
        if (e) {
          res.status(400).send('Invalid user supplied');
        }
        res.send(raw);
      });
    }
  });
});
//Delete an user
router.delete('/:username', (req, res) => {
  const query = { username: req.params.username };
  jwt.verify(req.token, 'secretkey', (err) => {
    if (err) {
      res.sendStatus(403);
    } else {
      User.findOneAndRemove(query,
        (e, raw) => {
          if (e) {
            res.status(400).send('Invalid username supplied');
          }
          res.send(raw);
        });
    }
  });
});

module.exports = router;