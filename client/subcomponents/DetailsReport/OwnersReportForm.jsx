import React from 'react'
import { useFormik} from 'formik'


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
      toggle: false,
      checked: [],
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      {/* HOUSE DETAILS */}
      <div className="grid gap-3 mb-6 border border-gray-300">
        <label htmlFor="address">Address</label>
        <input
          className="bg-gray-100"
          id="address"
          name="address"
          type="text"
        />

        <label htmlFor="currentRent">Current Rent</label>
        <input
          className="bg-gray-100"
          id="currentRent"
          name="currentRent"
          type="text"
        />

        <label htmlFor="deposit">Deposit</label>
        <input
          className="bg-gray-100"
          id="deposit"
          name="deposit"
          type="text"
        />

        <label htmlFor="currentRent">Advance</label>
        <input
          className="bg-gray-100"
          id="advance"
          name="advance"
          type="text"
        />

        <label htmlFor="datePurchased">When did you purchase the House?</label>
        <input
          className="bg-gray-100"
          id="datePurchased"
          name="datePurchased"
          type="text"
        />

        <label htmlFor="occupancy">How many people live in the House</label>
        <input
          className="bg-gray-100"
          id="occupancy"
          name="occupancy"
          type="text"
        />
      </div>
      {/* HOUSE HEALTH */}
      <div className="container">
        <label htmlFor="pets">Are Pets Allowed?</label>
        <input type="checkbox" name="toggle" id="pets" />

        <label htmlFor="security">Does it have a security system?</label>
        <input type="checkbox" name="toggle" id="security" />

        <label htmlFor="alarm">Is there a fire/smoke alarm?</label>
        <input type="checkbox" name="toggle" id="alarm" />

        <label htmlFor="windows">Are the windows double glazed?</label>
        <input type="checkbox" name="toggle" id="windows" />

        <label htmlFor="compost">Is there a composting system?</label>
        <input type="checkbox" name="toggle" id="compost" />

        <label htmlFor="tank">Is there a water tank?</label>
        <input type="checkbox" name="toggle" id="tank" />

        <div>
          Is there insulation?
          <label htmlFor="tank">
            <input type="checkbox" name="toggle" id="tank" />
            Wall
          </label>
          <label htmlFor="tank">
            <input type="checkbox" name="toggle" id="tank" />
            Ceiling
          </label>
          <label htmlFor="tank">
            <input type="checkbox" name="toggle" id="tank" />
            Floor
          </label>
        </div>

        <div>
          Extraction
          <label htmlFor="tank">
            <input type="checkbox" name="toggle" id="tank" />
            Bathroom Extractor
          </label>
          <label htmlFor="tank">
            <input type="checkbox" name="toggle" id="tank" />
            Kitchen Rangehood
          </label>
        </div>

        <label htmlFor="energy">Energy Sources</label>
        <input className="bg-gray-100" id="energy" name="energy" type="text" />

        <label htmlFor="noise">Is there any neighborhood noise?</label>
        <input className="bg-gray-100" id="noise" name="noise" type="text" />

        <label htmlFor="occupancy">How many people live in the House</label>
        <input
          className="bg-gray-100"
          id="occupancy"
          name="occupancy"
          type="text"
        />

        <label htmlFor="occupancy">Describe the Garden</label>
        <input
          className="bg-gray-100"
          id="occupancy"
          name="occupancy"
          type="text"
        />
      </div>
      {/* HOUSE RATING */}
      <div>
      Rate the house out of 5
      </div>
      {/* YOUR DETAILS */}
      <div></div>

      <button type="submit">Submit</button>
    </form>
  )
}
