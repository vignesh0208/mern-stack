const express = require('express')
const bodyParser = require('body-parser')
const passport = require("passport");
const cors = require('cors')

const db = require('./db')
const users = require("./routes/auth-router")
const admin = require('./routes/admin-auth-router')
const sendMail = require('./routes/send-mail')

const config = require("./config/config");

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use(passport.initialize());
require("./config/passport")(passport)

app.use("/api/users", users)
app.use("/api/admin", admin)
app.use("/sendmail", sendMail)

app.listen(config.port, () => console.log(`Server running on port ` + config.port))
