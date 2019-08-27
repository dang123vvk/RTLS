const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../lib/db');

//Model User inludes: userfullname, username, email, password, role
var nodeSchema = new Schema({
    label: {
        type: String, 
    },
    nodeType: {
        type: String,
    },
    ble: {
        type: String,
        required: true,
    },
    lebs: {
        type: String,
    },
    uwbFirmwareUpdate: {
        type: String,
    },
    x: {
        type: Schema.Types.Decimal128
    },
    y: {
        type: Schema.Types.Decimal128
    },
    z: {
        type: Schema.Types.Decimal128
    },
    quality: {
        type: Number,
        
    },
    dateAdded: { type: String, default: Date() },
})

const Node = mongoose.model('Node', nodeSchema);

module.exports = {
    Node
};