const express = require('express')
const router = express.Router()

const {
  getRentersReports,
  createRentersReport,
  editRentersStatus,
  getPendingReports,
} = require('../db/functions/report')

// get route for pending reports for admin portal
router.get('/pending', (req, res) => {
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

// /get renters form submission
router.get('/:id', (req, res) => {
  const id = req.params.id
  getRentersReports(id)
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

// /post form approval
router.post('/:id', (req, res) => {
  const id = Number(req.params.id)
  const dateSubmitted = Date.now()
  const {
    houseId,
    reportSubmitter,
    approvalStatus,
    address,
    email,
    currentRent,
    bond,
    rentAdvance,
    StartDate,
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
    reportSubmitter,
    approvalStatus,
    address,
    email,
    currentRent,
    bond,
    rentAdvance,
    StartDate,
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

// patch route for renters submission form
router.patch('/:id', async (req, res) => {
  try {
    const updateStatus = req.body
    const id = req.params.id
    const newStatus = await editRentersStatus(id, updateStatus)
    console.log(newStatus)
    res.sendStatus(201) //Approved
  } catch (error) {
    res.status(500).json('computers says NO!')
  }
})

module.exports = router
