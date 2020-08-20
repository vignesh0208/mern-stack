const mongoose = require('mongoose')
const config = require("../config/config");

mongoose
    .connect(config.db.mongo.address + config.db.mongo.dbname, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db