const express = require('express')
const router = express.Router()
const request = require('superagent')

const key =
  'Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IlRFU1QiLCJwaS5hdG0iOiIxIn0.eyJzY29wZSI6W10sImNsaWVudF9pZCI6IjYzZTNjOGI4MjZkNTQ5NDQ5YWY4NzdiYTVjN2UxZjc0IiwiZXhwIjoxNjY0MzM2MTA4fQ.X3jaTj45wrz2qh2EqbfAhT6nZ__UgqwApb13jGNUExU'
// /get request to the external api for address suggesstions
router.get('/', (req, res) => {
  const string = req.query.search

  return request
    .get(
      `https://api.nzpost.co.nz/addresschecker/1.0/suggest?q=${string}&max=5`
    )
    .set('Authorization', key)
    .set('client_id', '63e3c8b826d549449af877ba5c7e1f74')
    .set('Accept', 'application/json')
    .then((response) => {
      return res.json(response.body)
    })
    .catch((err) => {
      console.log(err.message)
      res.status(err.status).json(err)
    })
})

module.exports = router
