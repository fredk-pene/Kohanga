const express = require('express')
const router = express.Router()
const { createOwnersReport } = require('../db/functions/owners-report')

//  post route for owner report
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
    ownerStartDate,
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
    energy,
    waterTank,
    compost,
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
    ownerStartDate,
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
    energy,
    waterTank,
    compost,
    otherComments,
  }
  createOwnersReport(bigData)
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
