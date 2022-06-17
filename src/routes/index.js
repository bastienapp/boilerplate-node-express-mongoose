const express = require('express')
const routeTodo = require('./route.todo')
const router = express.Router()

router.use('/todos', routeTodo)

module.exports = router
