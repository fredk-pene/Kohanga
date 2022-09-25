const express = require('express')
const router = express.Router()

const { getSampleData } = require('../db/functions/sample-data')

// /get renters form submission
router.get('/:id', (req, res) => {
  const id = req.params.id
  getSampleData(id)
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

module.exports = router
