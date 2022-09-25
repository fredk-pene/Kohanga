const express = require('express')
const router = express.Router()
const request = require('superagent')

const key =
  'Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IlRFU1QiLCJwaS5hdG0iOiIxIn0.eyJzY29wZSI6W10sImNsaWVudF9pZCI6IjYzZTNjOGI4MjZkNTQ5NDQ5YWY4NzdiYTVjN2UxZjc0IiwiZXhwIjoxNjY0MTUxMjcyfQ.HUigX-00YQA5wgqP468kJstcdV5V7D0nokDsA2pjiKA'
// /get request to the external api for address suggesstions
router.get('/', (req, res) => {
  // const string = req.body
  // console.log(string)
  return request
    .get(
      'https://api.nzpost.co.nz/addresschecker/1.0/suggest?q=31+Walters+Road&max=5'
    )
    .set('Authorization', key)
    .set('client_id', '63e3c8b826d549449af877ba5c7e1f74')
    .set('Accept', 'application/json')
    .then((response) => {
      console.log(response.body)
      return res.json(response)
    })
    .catch((err) => {
      console.log(err.message)
      res.status(err.status).json(err)
    })
})

module.exports = router
