const express = require('express')
// const checkJwt = require('../auth0')
// const db = require('../db/users')
const router = express.Router()
const {
  getAllRentersReports,
  createRentersReport,
} = require('../db/functions/renters-report')

// /get renters form submission
router.get('/:id', (req, res) => {
  console.log('hitting route')
  const id = Number(req.params.id)
  getAllRentersReports(id)
    .then((id) => {
      res.json(id)
      return res.json()
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

// /post form approval
router.post('/:id', (req, res) => {
  const id = Number(req.params.id)
  const {
    houseId,
    dateSubmitted,
    approvalStatus,
    address,
    email,
    currentRent,
    bond,
    rentAdvance,
    rentStartDate,
    occupancy,
    pets,
    garden,
    homeHealthInsulationCeiling,
    homeHealthInsulationFan,
    homeHealthInsulationFloor,
    homeHealthInsulationWall,
    homeHealthRangeHood,
    securitySystem,
    heating,
    ventilationSystem,
    fireAlarms,
    doubleGlazed,
    noise,
    rateHh,
    energy,
    waterTank,
    compost,
    rateManager,
    rateResponse,
    otherComments,
  } = req.body
  const bigData = {
    id,
    houseId,
    dateSubmitted,
    approvalStatus,
    address,
    email,
    currentRent,
    bond,
    rentAdvance,
    rentStartDate,
    occupancy,
    pets,
    garden,
    homeHealthInsulationCeiling,
    homeHealthInsulationFan,
    homeHealthInsulationFloor,
    homeHealthInsulationWall,
    homeHealthRangeHood,
    securitySystem,
    heating,
    ventilationSystem,
    fireAlarms,
    doubleGlazed,
    noise,
    rateHh,
    energy,
    waterTank,
    compost,
    rateManager,
    rateResponse,
    otherComments,
  }
  createRentersReport(bigData)
    .then(() => {
      res.status(201).json({
        ok: 'ok',
      })
      return null
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500)
    })
})

module.exports = router
