const express = require('express')
const cors = require('cors')
const app = express()
require('./config/mongodb')
require('dotenv').config()
const routes = require('./routes/index')

app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? 'http://localhost:3000',
    optionsSuccessStatus: 200,
  })
)

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use('/', routes)

const PORT = process.env.PORT ?? 8000

app.listen(PORT, () => {
  console.log(`Connected, listen on port ${PORT}`)
})
