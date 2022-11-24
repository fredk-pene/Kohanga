const path = require('path')
const express = require('express')
const reportRoute = require('./routes/reportsubmission')
const userRoutes = require('./routes/users')
const addressRoutes = require('./routes/addressRoutes.js')
const dataRoutes = require('./routes/sampleDataRoute')
const server = express()

require('dotenv').config({ path: path.join(__dirname, '.env') })

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/users', userRoutes)
server.use('/api/v1/reportsubmission', reportRoute)
server.use('/api/v1/address', addressRoutes)
server.use('/api/v1/sampleData', dataRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'))
})

module.exports = server
