const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../lib/db');

//Model User inludes: userfullname, username, email, password, role
var imageSchema = new Schema({
    name: {
        type: String, 
    },
    location: {
        type: String,
    },
    type: {
        type: String,
    },
    base64: {
        type: Schema.Types.Buffer,
    },
    dateAdded: { type: Date, default: Date.now },
})

const Image = mongoose.model('Image', imageSchema);

module.exports = {
    Image
};