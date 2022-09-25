const path = require('path')
const express = require('express')
// const ownerSubRoute = require('./routes/ownerSubmission')
const reportRoute = require('./routes/reportsubmission')
const userRoutes = require('./routes/users')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/users', userRoutes)
// server.use('/api/v1/ownersubmissions', ownerSubRoute)
server.use('/api/v1/reportsubmission', reportRoute)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'))
})

module.exports = server
