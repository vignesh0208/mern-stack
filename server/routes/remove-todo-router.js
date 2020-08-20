const express = require('express');

const todoCtrl = require('../controllers/todo-ctrl');

const router = express.Router();

router.post('/', todoCtrl.removeTodos)

module.exports = router