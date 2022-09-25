import React from 'react'
import { useFormik } from 'formik'
import FileUploader from './FileUploader'

export default function OwnersReportForm() {
  const formik = useFormik({
    initialValues: {
      address: '',
      currentRent: '',
      deposit: '',
      advance: '',
      datePurchased: '',
      occupancy: '',
      comments: '',
      energy: '',
      noise: '',
      garden: '',
      heat: '',
      toggle: false,
      checked: [],
    },
    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2))
      let formData = new FormData()

      formData.append('address', values.address)
      formData.append('currentRent', values.currentRent)
      formData.append('deposit', values.deposit)
      formData.append('advance', values.advance)
      formData.append('datePurchased', values.datePurchased)
      formData.append('occupancy', values.occupancy)
      formData.append('comments', values.comments)
      formData.append('energy', values.energy)
      formData.append('noise', values.noise)
      formData.append('garden', values.garden)
      formData.append('heat', values.heat)

      console.log(formData.append('address', values.address))
    },
  })

  return (
    <div className="absolute">
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
                className="py-2 px-3 h-6 w-60 rounded-full bg-stone-200 border-black border"
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
                  className="py-2 px-3 h-6 w-50 rounded-full bg-stone-200 border-black border"
                  id="currentRent"
                  name="currentRent"
                  type="text"
                  onChange={formik.handleChange}
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label htmlFor="deposit">Deposit</label>
                <input
                  className="py-2 px-3 h-6 w-50 rounded-full bg-stone-200 border-black border"
                  id="deposit"
                  name="deposit"
                  type="text"
                  onChange={formik.handleChange}
                />
              </div>

              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label htmlFor="currentRent">Advance</label>
                <input
                  className="py-2 px-3 h-6 w-50 rounded-full bg-stone-200 border-black border"
                  id="advance"
                  name="advance"
                  type="text"
                  onChange={formik.handleChange}
                />
              </div>
            </div>

            <div className="flex flex-wrap mb-2">
              <div className="md:w-1/3 px-2">
                <label className="flex" htmlFor="datePurchased">
                  When did you purchase the House?
                </label>
                <input
                  className="border py-2 px-3 h-6 w-50 rounded-full bg-stone-200 border-black border"
                  id="datePurchased"
                  name="datePurchased"
                  type="text"
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

            <div className="w-full px-3 mb-10">
              <label className="flex" htmlFor="comments">
                Any other comments about the house?
              </label>
              <input
                className="py-2 px-3 w-60 h-20 rounded-lg bg-stone-200 border-black border"
                id="comments"
                name="comments"
                type="text"
                onChange={formik.handleChange}
              />
            </div>
            {/* YOUR DETAILS */}
            <div className="border-black border px-3 pt-2">
              Your Details
              <br></br>
              <div className="mt-2">
                <label htmlFor="email">what is your email? (incase we need to contact you)</label>
                <input
                  className="py-2 px-3 h-6 w-60 mb-2 border-black border rounded-full bg-stone-200 flex "
                  id="email"
                  name="email"
                  type="text"
                  onChange={formik.handleChange}
                />
              </div>
              <div>
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
                id="heat"
                name="heat"
                type="text"
                onChange={formik.handleChange}
              />
            </div>
            <div className="w-full md:w-1/2 mb-3">
              <label className="flex" htmlFor="pets">
                Are Pets Allowed?
              </label>
              <input
                type="checkbox"
                name="toggle"
                id="pets"
                onChange={formik.handleChange}
              />
            </div>
            <div className="flex flex-wrap mb-3">
              <div className="w-full md:w-1/2">
                <label className="flex" htmlFor="security">
                  Does it have a security system?
                </label>
                <input
                  type="checkbox"
                  name="toggle"
                  id="security"
                  onChange={formik.handleChange}
                />
              </div>

              <div className="w-full md:w-1/2">
                <label className="flex" htmlFor="alarm">
                  Is there a fire/smoke alarm?
                </label>
                <input
                  type="checkbox"
                  name="toggle"
                  id="alarm"
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-2">
              <div className="w-full md:w-1/2">
                <label className="flex" htmlFor="windows">
                  Are the windows double glazed?
                </label>
                <input
                  type="checkbox"
                  name="toggle"
                  id="windows"
                  onChange={formik.handleChange}
                />
              </div>

              <div className="w-full md:w-1/2">
                <label htmlFor="compost">Is there a composting system?</label>
                <input
                  className="flex"
                  type="checkbox"
                  name="toggle"
                  id="compost"
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div className="flex flex-row mb-2">
              <div className="w-full md:w-1/3">
                <label className="flex" htmlFor="tank">
                  Is there a water tank?
                </label>
                <input
                  type="checkbox"
                  name="toggle"
                  id="tank"
                  onChange={formik.handleChange}
                />
              </div>

              <div className="w-full md:w-1/1 pl-48 flex-row space-x-5">
                <label className="inline-block" htmlFor="wallInsulation">
                  <input
                    className="ml-2 mr-1 mb-1 flex"
                    type="checkbox"
                    name="toggle"
                    id="wallInsulation"
                    onChange={formik.handleChange}
                  />
                  Wall
                </label>

                <label className="inline-block" htmlFor="ceilingInsulation">
                  <input
                    className="ml-2 mr-1 mb-1 flex"
                    type="checkbox"
                    name="toggle"
                    id="ceilingInsulation"
                    onChange={formik.handleChange}
                  />
                  Ceiling
                </label>

                <label className="inline-block" htmlFor="floorInsulation">
                  <input
                    className="ml-2 mr-1 mb-1 flex"
                    type="checkbox"
                    name="toggle"
                    id="floorInsulation"
                    onChange={formik.handleChange}
                  />
                  Floor
                </label>
              </div>
            </div>
            <div className="flex pt-2">
              <div className="w-full md:w-1/3 mb-2">
                <label className="flex" htmlFor="ventilation">
                  <input
                    type="checkbox"
                    name="toggle"
                    id="ventilation"
                    onChange={formik.handleChange}
                  />
                  Is there ventilation?
                </label>
              </div>

              {/* Extraction */}
              <div className="w-full md:w-1/1 pl-48 space-x-5">
                <label className="inline-block" htmlFor="bathroomExtractor">
                  <input
                    className="ml-2 mr-1 mb-1 flex"
                    type="checkbox"
                    name="toggle"
                    id="bathroomExtractor"
                    onChange={formik.handleChange}
                  />
                  Bathroom Extractor
                </label>
                <label className="inline-block" htmlFor="rangeHood">
                  <input
                    className="ml-2 mr-1 mb-1 flex"
                    type="checkbox"
                    name="toggle"
                    id="rangeHood"
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
            <select className="w-20 bg-stone-200 h-9 py-2 px-3 w-60 border-black border rounded-lg bg-stone-200 mb-10">
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
