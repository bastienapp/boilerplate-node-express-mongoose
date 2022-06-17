const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./config/db')
require('dotenv').config()
const routes = require('./routes/index')

app.use(cors())

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use('/', routes)

const { SERVER_PORT } = process.env

app.listen(SERVER_PORT, () => {
  console.log(`Connected, listen on port ${SERVER_PORT}`)
})
