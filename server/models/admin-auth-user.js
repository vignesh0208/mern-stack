const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthUser = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        value: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("admin", AuthUser);