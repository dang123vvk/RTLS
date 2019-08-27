const express = require('express');
const router = express.Router();
const db = require('../lib/db');
const helpers = require('../lib/helpers')
const {User} = require('../models/user');
const jwt = require("jsonwebtoken");

//Authentication with sign in username and password 
router.post('/signin', async (req, res) => {
  const {username, password} = req.body;
  const user_req = {
    username: username,
    password: password
  };
  const user = await User.findOne({username:username});
  if(user){
    const validPassword = await helpers.matchPassword(password, user.password);
  if(validPassword){
      jwt.sign({user_req}, 'secretkey', (err, token) => {
        res.send({
          message :'Login Successfull',
          token: 'Bearer ' + token,
          user: user,
          status: true
        });
      });
  }
  else {
    res.send({
      message :'The username or password you entered is incorrect',
      status: false
    });
  }
  }
  else {
    res.send({
      message :'The username does not exist',
      status: false
    });
  }
  
});

module.exports = router;