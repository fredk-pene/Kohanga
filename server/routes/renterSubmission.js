const express = require('express')
const router = express.Router()

const {
  getRentersReports,
  createRentersReport,
  editRentersStatus,
} = require('../db/functions/renters-report')

// /get renters form submission
router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  getRentersReports(id)
    .then((id) => {
      return res.json(id)
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
