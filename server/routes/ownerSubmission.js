const express = require('express')
const router = express.Router()
const {
  createOwnersReport,

  getOwnerReports,
  editReport,
} = require('../db/functions/owners-report')

// /get owner form submission
router.get('/:id', (req, res) => {
  console.log('hitting route')
  const id = Number(req.params.id)
  getOwnerReports(id)
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

// patch route for owners submission form
router.patch('/:id', async (req, res) => {
  try {
    const updateStatus = req.body
    const id = req.params.id
    const newStatus = await editOwnersStatus(id, updateStatus)
    console.log(newStatus)
    res.sendStatus(201) //Approved
  } catch (error) {
    res.status(500).json('computers says NO!')
  }
})

module.exports = router
