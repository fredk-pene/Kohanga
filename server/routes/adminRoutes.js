const express = require('express')
const router = express.Router()

const { getPendingReports } = require('../db/functions/report')

// get route for pending reports for admin portal
router.get('/', (req, res) => {
  getPendingReports()
    .then((response) => {
      return res.json(response)
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to retrieve submissions',
        },
      })
    })
})
