const path = require('path')
const express = require('express')
// const ownerSubRoute = require('./routes/ownerSubmission')
const reportRoute = require('./routes/reportsubmission')
const userRoutes = require('./routes/users')
const addressRoutes = require('./routes/addressRoutes.js')
const dataRoutes = require('./routes/sampleDataRoute')
// const adminRoutes = require('./routes/adminRoutes')

const server = express()
const request = require('superagent')
const key = process.env.access_token

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/users', userRoutes)
server.use('/api/v1/reportsubmission', reportRoute)
server.use('/api/v1/address', addressRoutes)
server.use('/api/v1/sampleData', dataRoutes)
// server.use('/api/v1/admin', adminRoutes)

// server.use('/api/v1/ownersubmissions', ownerSubRoute)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'))
})

server.get('/address', (req, res) => {
  const addressURL = `https://api-uat.corelogic.asia/sandbox/search/nz/matcher/address?q=52%20Nikau%20Road%2C%20Otahuhu%2C%20Auckland" -H "accept: */*" -H "authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJDUlQiLCJNQVAiLCJQVFkiLCJTR1QiLCJTVFMiLCJUVEwiXSwicm9sZXMiOltdLCJpc3MiOiJodHRwczovL2FjY2Vzcy1hcGkuY29yZWxvZ2ljLmFzaWEiLCJlbnZfYWNjZXNzX3Jlc3RyaWN0Ijp0cnVlLCJleHAiOjE2NjQwMjY4OTgsImdlb19jb2RlcyI6WyJBQ1QgLSBGdWxsIFN0YXRlIiwiTlNXIC0gTWV0cm8iLCJOU1cgLSBSZWdpb25hbCIsIk5UIC0gRnVsbCBTdGF0ZSIsIlFMRCAtIE1ldHJvIiwiUUxEIC0gUmVnaW9uYWwiLCJTQSAtIE1ldHJvIiwiU0EgLSBSZWdpb25hbCIsIlRBUyAtIEZ1bGwgU3RhdGUiLCJWSUMgLSAoQUEpIEZ1bGwgU3RhdGUiLCJWSUMgLSBGdWxsIFN0YXRlIiwiVklDIC0gTWV0cm8iLCJWSUMgLSBSZWdpb25hbCIsIldBIC0gTWV0cm8iLCJXQSAtIFJlZ2lvbmFsIiwiTm9ydGggSXNsYW5kIiwiU291dGggSXNsYW5kIl0sImNsaWVudF9pZCI6IkpQQUJaU1dhZ1ZtQ1NoWkw1dEZJcWRLUDd2c2xjWXFGIiwic291cmNlX2V4Y2x1c2lvbiI6W119.UP2dDQYBlbdS9JltKXEVFzabG11ISf1dx-KM9NxRQe4XK7jzmLfRJkXe5gNmGpCPZPSvLnEMv_HY4l2ltFKvzfi9VtTxCpLFVb0qehzNhsvJ99IGGYRXZCSPh5zwS5LSTTcZWPF19RtRye3hyl5hNR6PRQ9RIjCkc8wYgIkkypE`
  request
    .get(addressURL)
    .set('authorization', key)
    .then((response) => {
      console.log(response.body)
      res.json(response.body)
    })
    .catch((err) => console.error(err.message))
})

module.exports = server
