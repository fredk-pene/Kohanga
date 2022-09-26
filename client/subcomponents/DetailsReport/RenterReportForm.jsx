import React from 'react'
import { useFormik } from 'formik'
import FileUploader from './FileUploader'
import { postReport } from '../../api'

export default function RenterReportForm() {
  function checkIfTrue(key) {
    return key[0] ? true : false
  }
  const formik = useFormik({
    initialValues: {
      status: '',
      houseId: '',
      homeHealthInsulationCeiling: [],
      homeHealthInsulationWall: [],
      homeHealthInsulationFloor: [],
      petsCats: [],
      petsDogs: [],
      securitySystem: [],
      fireAlarms: [],
      doubleGlazed: [],
      compost: [],
      ventilationSystem: [],
      homeHealthInsulationFan: [],
      homeHealthRangeHood: [],
      rentAdvance: '',
      email: '',
      otherComments: '',
      energy: '',
      noise: '',
      garden: '',
      heating: '',
      waterTank: '',
      address: '',
      currentRent: '',
      bond: '',
      StartDate: '',
      occupancy: '',
      rateManager: '',
      rateResponse: '',
    },
    onSubmit: async (values) => {
      const formattedData = {
        address: values.address,
        houseId: values.address.replaceAll(',', '').replace(/\s/g, '-'),
        status: 'Approved',
        currentRent: values.currentRent,
        bond: values.bond,
        homeHealthInsulationCeiling: checkIfTrue(
          values.homeHealthInsulationCeiling
        ),
        homeHealthInsulationWall: checkIfTrue(values.homeHealthInsulationWall),
        homeHealthInsulationFloor: checkIfTrue(
          values.homeHealthInsulationFloor
        ),
        petsCats: checkIfTrue(values.petsCats),
        petsDogs: checkIfTrue(values.petsDogs),
        securitySystem: checkIfTrue(values.securitySystem),
        fireAlarms: checkIfTrue(values.fireAlarms),
        doubleGlazed: checkIfTrue(values.doubleGlazed),
        compost: checkIfTrue(values.compost),
        ventilationSystem: checkIfTrue(values.ventilationSystem),
        homeHealthInsulationFan: checkIfTrue(values.homeHealthInsulationFan),
        homeHealthRangeHood: checkIfTrue(values.homeHealthRangeHood),
        rentAdvance: values.rentAdvance,
        ownerStartDate: values.ownerStartDate,
        occupancy: values.occupancy,
        reportSubmitter: 'Tenant',
        email: values.email,
        otherComments: values.otherComments,
        energy: values.energy,
        noise: values.noise,
        garden: values.garden,
        heating: values.heating,
        waterTank: checkIfTrue(values.waterTank),
        startDate: values.startDate,
        rateManager: values.rateManager,
        rateResponse: values.rateReponse,
      }

      postReport(formattedData)
    },
  })

  return (
    <div className=" pt-3">
      <form onSubmit={formik.handleSubmit} className="w-full ">
        <div className="flex flex-wrap mx-3 mb-6 border-black border">
          {/* HOUSE DETAILS */}
          <div className="w-full md:w-1/2">
            <div className="mb-1 px-3">House Details</div>
            <div className="w-full md:w-1/2 px-3 mb-4 pt-2">
              <label className="flex" htmlFor="address">
                Address
              </label>
              <input
                className="py-2 px-3 h-6 w-60 rounded-full bg-stone-200 border-black border-2"
                id="address"
                name="address"
                type="text"
                onChange={formik.handleChange}
              />
            </div>
            <div className="flex flex-wrap mb-2">
              <div className="w-full md:w-1/3 px-3 md:mb-0">
                <label htmlFor="currentRent">Current Rent</label>
                <input
                  className="py-2 px-3 h-6 w-50 rounded-full bg-stone-200 border border-black border-2"
                  id="currentRent"
                  name="currentRent"
                  type="text"
                  onChange={formik.handleChange}
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label htmlFor="bond">Bond</label>
                <input
                  className="py-2 px-3 h-6 w-50 rounded-full bg-stone-200 border-black border"
                  id="bond"
                  name="bond"
                  type="text"
                  onChange={formik.handleChange}
                />
              </div>

              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label htmlFor="currentRent">Advance</label>
                <input
                  className="py-2 px-3 h-6 w-50 rounded-full bg-stone-200 border-black border"
                  id="rentAdvance"
                  name="rentAdvance"
                  type="text"
                  onChange={formik.handleChange}
                />
              </div>
            </div>

            <div className="flex flex-wrap mb-2">
              <div className="md:w-1/3 px-2 pt-7 ">
                <label className="flex" htmlFor="StartDate">
                  Occupancy dates
                </label>
                <input
                  className="border py-2 px-3 h-6 w-50 rounded-full bg-stone-200 border-black border"
                  id="StartDate"
                  name="StartDate"
                  type="date"
                  onChange={formik.handleChange}
                />
              </div>

              <div className="px-6 mt-6">
                <label className="flex" htmlFor="occupancy">
                  How many people live in the House
                </label>
                <input
                  className="py-2 px-3 w-14 h-6 rounded-full bg-stone-200 border-black border"
                  id="occupancy"
                  name="occupancy"
                  type="text"
                  onChange={formik.handleChange}
                />
              </div>
            </div>

            <div className="flex flex-wrap mb-2 space-x-5">
              <div className="md:w-1/3 px-2">
                <div>
                  Rate property manager <br></br> responsiveness
                </div>
                <select className="w-20 bg-stone-200 h-9 py-2 px-3 w-60 border-black border rounded-lg bg-stone-200 mb-10">
                  <option>⭐</option>
                  <option>⭐⭐</option>
                  <option>⭐⭐⭐</option>
                  <option>⭐⭐⭐⭐</option>
                  <option>⭐⭐⭐⭐⭐</option>
                </select>
              </div>

              <div className="md:w-1/3 px-2">
                <div>
                  Rate property manager <br></br> out of 5
                </div>
                <select className="w-20 bg-stone-200 h-9 py-2 px-3 w-60 border-black border rounded-lg bg-stone-200 mb-10">
                  <option>⭐</option>
                  <option>⭐⭐</option>
                  <option>⭐⭐⭐</option>
                  <option>⭐⭐⭐⭐</option>
                  <option>⭐⭐⭐⭐⭐</option>
                </select>
              </div>
            </div>

            <div className="w-full px-3 mb-10">
              <label className="flex" htmlFor="otherComments">
                Any other other comments about the house?
              </label>
              <input
                className="py-2 px-3 w-60 h-20 rounded-lg bg-stone-200 border-black border"
                id="otherComments"
                name="otherComments"
                type="text"
                onChange={formik.handleChange}
              />
            </div>
            {/* YOUR DETAILS */}
            <div className="border-black border px-3 pt-2">
              Your Details
              <br></br>
              <div className="mt-2">
                <label htmlFor="email">
                  what is your email? (incase we need to contact you)
                </label>
                <input
                  className="py-2 px-3 h-6 w-60 mb-2 border-black border rounded-full bg-stone-200 flex "
                  id="email"
                  name="email"
                  type="text"
                  onChange={formik.handleChange}
                />
              </div>
              <div className="mt-2">
                Please upload proof of home ownership, and property images
                <FileUploader />
              </div>
            </div>
          </div>
          <br></br>
          {/* HOUSE HEALTH */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 border-black border">
            <div className="mb-2">House Health</div>
            <div className="w-full md:w-1/2 mb-3">
              <label htmlFor="energy">What is the heating source?</label>
              <input
                className="py-2 px-3 h-6 w-60 border-black border rounded-full bg-stone-200"
                id="heating"
                name="heating"
                type="text"
                onChange={formik.handleChange}
              />
            </div>
            <div className="w-full md:w-1/2 mb-3 space-x-3 ">
              <label className="flex" htmlFor="pets">
                Are Pets Allowed?
              </label>
              <div className="form-check form-check-inline">
                <input
                  name="petsDogs"
                  type="checkbox"
                  id="petsDogs"
                  value="pets"
                  onChange={formik.handleChange}
                />
                <label
                  className="form-check-label inline-block text-gray-800"
                  htmlFor="pets"
                >
                  Dogs
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  name="petsCats"
                  type="checkbox"
                  id="petsCats"
                  value="pets"
                  onChange={formik.handleChange}
                />
                <label
                  className="form-check-label inline-block text-gray-800"
                  htmlFor="pets"
                >
                  Cats
                </label>
              </div>
            </div>
            <div className="flex flex-wrap mb-3">
              <div className="w-full md:w-1/2">
                <label className="flex" htmlFor="securitySystem">
                  Does it have a security system?
                </label>
                <input
                  type="checkbox"
                  name="securitySystem"
                  id="securitySystem"
                  onChange={formik.handleChange}
                />
              </div>

              <div className="w-full md:w-1/2">
                <label className="flex" htmlFor="fireAlarms">
                  Is there a fire/smoke alarm?
                </label>
                <input
                  type="checkbox"
                  name="fireAlarms"
                  id="fireAlarms"
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-2">
              <div className="w-full md:w-1/2">
                <label className="flex" htmlFor="doubleGlazed">
                  Are the windows double glazed?
                </label>
                <input
                  type="checkbox"
                  name="doubleGlazed"
                  id="doubleGlazed"
                  onChange={formik.handleChange}
                />
              </div>

              <div className="w-full md:w-1/2">
                <label htmlFor="compost">Is there a composting system?</label>
                <input
                  className="flex"
                  type="checkbox"
                  name="compost"
                  id="compost"
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div className="flex flex-row mb-2">
              <div className="w-full md:w-1/3">
                <label className="flex" htmlFor="waterTank">
                  Is there a water tank?
                </label>
                <input
                  type="checkbox"
                  name="waterTank"
                  id="waterTank"
                  onChange={formik.handleChange}
                />
              </div>

              <div className="w-full md:w-1/1 pl-48 flex-row space-x-5">
                <label
                  className="inline-block"
                  htmlFor="homeHealthInsulationWall"
                >
                  <input
                    className="ml-2 mr-1 mb-1 flex"
                    type="checkbox"
                    name="homeHealthInsulationWall"
                    id="homeHealthInsulationWall"
                    onChange={formik.handleChange}
                  />
                  Wall
                </label>

                <label
                  className="inline-block"
                  htmlFor="homeHealthInsulationCeiling"
                >
                  <input
                    className="ml-2 mr-1 mb-1 flex"
                    type="checkbox"
                    name="homeHealthInsulationCeiling"
                    id="homeHealthInsulationCeiling"
                    onChange={formik.handleChange}
                  />
                  Ceiling
                </label>

                <label
                  className="inline-block"
                  htmlFor="homeHealthInsulationFloor"
                >
                  <input
                    className="ml-2 mr-1 mb-1 flex"
                    type="checkbox"
                    name="homeHealthInsulationFloor"
                    id="homeHealthInsulationFloor"
                    onChange={formik.handleChange}
                  />
                  Floor
                </label>
              </div>
            </div>
            <div className="flex pt-2">
              <div className="w-full md:w-1/3 mb-2">
                <label className="flex" htmlFor="ventilationSystem">
                  <input
                    type="checkbox"
                    name="ventilationSystem"
                    id="ventilationSystem"
                    onChange={formik.handleChange}
                  />
                  Is there ventilation?
                </label>
              </div>

              {/* Extraction */}
              <div className="w-full md:w-1/1 pl-48 space-x-5">
                <label
                  className="inline-block"
                  htmlFor="homeHealthInsulationFan"
                >
                  <input
                    className="ml-2 mr-1 mb-1 flex"
                    type="checkbox"
                    name="homeHealthInsulationFan"
                    id="homeHealthInsulationFan"
                    onChange={formik.handleChange}
                  />
                  Bathroom Extractor
                </label>
                <label className="inline-block" htmlFor="homeHealthRangeHood">
                  <input
                    className="ml-2 mr-1 mb-1 flex"
                    type="checkbox"
                    name="homeHealthRangeHood"
                    id="homeHealthRangeHood"
                    onChange={formik.handleChange}
                  />
                  Kitchen Rangehood
                </label>
              </div>
            </div>
            <div className="flex flex-wrap mb-3 pt-2">
              <div className="md:w-1/3">
                <label htmlFor="energy">Energy Sources</label>
                <input
                  className="py-2 px-3 h-6 w-60 border-black border rounded-full bg-stone-200"
                  id="energy"
                  name="energy"
                  type="text"
                  onChange={formik.handleChange}
                />
              </div>
              <div className="md:w-1/2 px-2">
                <label htmlFor="noise">Is there any neighborhood noise?</label>
                <input
                  className="py-2 px-3 h-6 w-60 border-black border rounded-full bg-stone-200"
                  id="noise"
                  name="noise"
                  type="text"
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 mb-3">
              <label htmlFor="garden">Describe the Garden</label>
              <input
                className="flex py-2 px-3 w-60 border-black border rounded-lg bg-stone-200"
                id="garden"
                name="garden"
                type="text"
                onChange={formik.handleChange}
              />
            </div>
            {/* HOUSE RATING */}
            <div>Rate the house out of 5</div>
            <select
              name="rateH"
              className="w-20 bg-stone-200 h-9 py-2 px-3 w-60 border-black border rounded-lg bg-stone-200 mb-10"
            >
              <option>🏡</option>
              <option>🏡🏡</option>
              <option>🏡🏡🏡</option>
              <option>🏡🏡🏡🏡</option>
              <option>🏡🏡🏡🏡🏡</option>
            </select>
          </div>
          <div className="mb-4 mt-4">
            <button
              className="bottom-12 left-10 ml-3 bg-dark-green hover:bg-lime-900 text-white py-1 px-5 rounded-full"
              type="submit"
            >
              Submit Report
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
