const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../lib/db');

//Model User inludes: userfullname, username, email, password, role
var userSchema = new Schema({
    userfullname: {
        type: String, 
        required: true, 
    },
    username: {
            type: String, 
            required: true, 
            unique: true},
    email: {
        type: String, 
        required: true, 
        unique: true},
    password: { 
        type: String, 
        required: true },
    role:  { 
        type: String, 
        required: true,
        default: 'user'},
	dateAdded : { type: Date, default: Date.now },
})

const User = mongoose.model('User', userSchema);

module.exports = {
    User
};