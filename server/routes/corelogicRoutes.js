const request = require('superagent')
const express = require('express')
const router = express.Router()

const key = process.env.access_token

router.get('/', (req, res) => {
  const addressURL = 'https://api-uat.corelogic.asia/sandbox/search/nz/matcher/address
  request
    .get(addressURL)
    .then((response) => {
      console.log(response.body)
      res.json(response.body)
    })
    .catch((err) => console.error(err.message))
})

module.exports = router
