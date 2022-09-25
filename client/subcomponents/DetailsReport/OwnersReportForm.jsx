import React from 'react'
import { useFormik } from 'formik'

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
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <div className="fixed">
      <form onSubmit={formik.handleSubmit} className="w-full ">
        House Details
        <div className="flex flex-wrap mx-3 mb-6 border-black border">
          {/* HOUSE DETAILS */}
          <div className="w-full md:w-1/2">
            <div className="w-full md:w-1/2 px-3 mb-4 pt-2">
              <label className="flex" htmlFor="address">
                Address
              </label>
              <input
                className="py-2 px-3 h-6 w-60 rounded-full bg-stone-200 border-black border"
                id="address"
                name="address"
                type="text"
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
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label htmlFor="deposit">Deposit</label>
                <input
                  className="py-2 px-3 h-6 w-50 rounded-full bg-stone-200 border-black border"
                  id="deposit"
                  name="deposit"
                  type="text"
                />
              </div>

              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label htmlFor="currentRent">Advance</label>
                <input
                  className="py-2 px-3 h-6 w-50 rounded-full bg-stone-200 border-black border"
                  id="advance"
                  name="advance"
                  type="text"
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
                />
              </div>

              <div className="px-6">
                <label className="flex" htmlFor="occupancy">
                  How many people live in the House
                </label>
                <input
                  className="py-2 px-3 w-11 h-10 rounded-full bg-stone-200 border-black border"
                  id="occupancy"
                  name="occupancy"
                  type="text"
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
              />
            </div>
            {/* YOUR DETAILS */}
            <div className="border-black border px-3 pt-2">
              Your Details
              <br></br>
              <div className='mt-2'>
                <label htmlFor="email">what is your email?</label>
                <input
                  className="py-2 px-3 h-6 w-60 mb-2 border-black border rounded-full bg-stone-200 flex "
                  id="email"
                  name="email"
                  type="text"
                />
              </div>
              <div>
                Please upload proof that you are the Owner of this property
              </div>
                <input id="file" name="file" type="file" className='mb-2' onChange={(event) => {
                  setFieldValue("file", event.currentTarget.files[0]);
                }} />
              <div className="mb-10">Add any photos of the house</div>
            </div>
          </div>
          <br></br>
          {/* HOUSE HEALTH */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 border-black border">
            House Health
            <div className="w-full md:w-1/2 mb-3">
              <label htmlFor="energy">What is the heating source?</label>
              <input
                className="py-2 px-3 h-6 w-60 border-black border rounded-full bg-stone-200"
                id="heat"
                name="heat"
                type="text"
              />
            </div>
            <div className="w-full md:w-1/2 mb-3">
              <label htmlFor="pets">Are Pets Allowed?</label>
              <input type="checkbox" name="toggle" id="pets" />
            </div>
            <div className="flex flex-wrap mb-3">
              <div className="w-full md:w-1/2">
                <label className="flex" htmlFor="security">
                  Does it have a security system?
                </label>
                <input type="checkbox" name="toggle" id="security" />
              </div>

              <div className="w-full md:w-1/2">
                <label className="flex" htmlFor="alarm">
                  Is there a fire/smoke alarm?
                </label>
                <input type="checkbox" name="toggle" id="alarm" />
              </div>
            </div>
            <div className="flex flex-wrap mb-2">
              <div className="w-full md:w-1/2">
                <label className="flex" htmlFor="windows">
                  Are the windows double glazed?
                </label>
                <input type="checkbox" name="toggle" id="windows" />
              </div>

              <div className="w-full md:w-1/2">
                <label htmlFor="compost">Is there a composting system?</label>
                <input
                  className="flex"
                  type="checkbox"
                  name="toggle"
                  id="compost"
                />
              </div>
            </div>
            <div className="flex flex-row mb-2">
              <div className="w-full md:w-1/3">
                <label className="flex" htmlFor="tank">
                  Is there a water tank?
                </label>
                <input type="checkbox" name="toggle" id="tank" />
              </div>

              <div className="w-full md:w-1/1 pl-48 flex-row space-x-5">
                <label className="inline-block" htmlFor="wallInsulation">
                  <input
                    className="ml-2 mr-1 mb-1 flex"
                    type="checkbox"
                    name="toggle"
                    id="wallInsulation"
                  />
                  Wall
                </label>

                <label className="inline-block" htmlFor="ceilingInsulation">
                  <input
                    className="ml-2 mr-1 mb-1 flex"
                    type="checkbox"
                    name="toggle"
                    id="ceilingInsulation"
                  />
                  Ceiling
                </label>

                <label className="inline-block" htmlFor="floorInsulation">
                  <input
                    className="ml-2 mr-1 mb-1 flex"
                    type="checkbox"
                    name="toggle"
                    id="floorInsulation"
                  />
                  Floor
                </label>
              </div>
            </div>
            <div className="flex flex-row mb-2 pt-2">
              <div className="w-full md:w-1/3">
                <label className="flex" htmlFor="ventilation">
                  <input type="checkbox" name="toggle" id="ventilation" />
                  Is there ventilation?
                </label>
              </div>

              {/* Extraction */}
              <div className="w-full md:w-1/1 pl-48 flex-row space-x-5">
                <label className="inline-block" htmlFor="bathroomExtractor">
                  <input
                    className="ml-2 mr-1 mb-1 flex"
                    type="checkbox"
                    name="toggle"
                    id="bathroomExtractor"
                  />
                  Bathroom Extractor
                </label>
                <label className="inline-block" htmlFor="rangeHood">
                  <input
                    className="ml-2 mr-1 mb-1 flex"
                    type="checkbox"
                    name="toggle"
                    id="rangeHood"
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
                />
              </div>
              <div className="md:w-1/2 px-2">
                <label htmlFor="noise">Is there any neighborhood noise?</label>
                <input
                  className="py-2 px-3 h-6 w-60 border-black border rounded-full bg-stone-200"
                  id="noise"
                  name="noise"
                  type="text"
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
          <div className='mb-4 mt-4'>
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
