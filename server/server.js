const express = require('express')
const bodyParser = require('body-parser')
const passport = require("passport");
const cors = require('cors')

const db = require('./db')
const todoRouter = require('./routes/todo-router')
const removeTodos = require('./routes/remove-todo-router')
const users = require("./routes/auth-router")

const config = require("./config/config");

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use(passport.initialize());
require("./config/passport")(passport)

app.use('/', todoRouter)
app.use('/remove', removeTodos)
app.use("/api/users", users)

app.listen(config.port, () => console.log(`Server running on port ` + config.port))
