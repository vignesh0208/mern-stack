require('dotenv').config()

const config = {
    env: process.env.APP_ENV,
    port: process.env.WEB_PORT || 5000,
    secretKey: process.env.SESSION_SECRET
}

if(config.env == 'development') {
    config.db = {}
    config.db.mongo = {
        address: 'mongodb://127.0.0.1:27017/',
        dbname:'todos'
    }
} else {
    config.db = {}
    config.db.mongo = {
        address: 'mongodb://mongo:27017/',
        dbname:'sampleWork'
    }
}

module.exports = config;