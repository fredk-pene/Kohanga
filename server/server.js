const path = require('path')
const express = require('express')
// const ownerSubRoute = require('./routes/ownerSubmission')
const reportRoute = require('./routes/reportsubmission')
const userRoutes = require('./routes/users')
const addressRoutes = require('./routes/addressRoutes')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/users', userRoutes)

server.use('/api/v1/reportsubmission', reportRoute)
server.use('/api/v1/address', addressRoutes)

// server.use('/api/v1/ownersubmissions', ownerSubRoute)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'))
})

module.exports = server
