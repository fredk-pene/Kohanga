import React from 'react'
import { useFormik } from 'formik'
import FileUploader from './FileUploader'
import { postReport } from '../../api'

import { useNavigate } from 'react-router-dom'

export default function OwnersChallengeForm({ address }) {
  const navigate = useNavigate()

  const formattedAddress = address.replaceAll('!2F', '/')

  const formik = useFormik({
    initialValues: {
      address: '',
      status: '',
      ownerStartDate: '',
      email: '',
      otherComments: '',
    },
    onSubmit: async (values) => {
      const formattedData = {
        address: !values.address ? formattedAddress : values.address,
        houseId: !values.address
          ? formattedAddress.replaceAll(',', '').replace(/\s/g, '-')
          : values.address.replaceAll(',', '').replace(/\s/g, '-'),

        status: 'pending',
        reportSubmitter: 'Landlord',
        email: values.email,
        otherComments: values.otherComments,
      }
      navigate(`/thankyou`, { state: { address: address } })

      postReport(formattedData)
    },
  })

  return (
    <div className="pt-3">
      <form onSubmit={formik.handleSubmit} className="w-full ">
        <div className="flex flex-wrap border-black border bg-white ">
          <div className="w-full md:w-1/2">
            <div className="mb-1 px-3 small-title border-b border-black ">
              House Details
            </div>
            <div className="w-full md:w-1/2 px-3 mb-4 pt-2">
              <label className="flex" htmlFor="address">
                Address
              </label>
              <input
                className="py-2 px-3 h-6 w-60 rounded-full bg-stone-200 border-black border"
                id="address"
                name="address"
                type="text"
                value={formattedAddress}
                onChange={formik.handleChange}
              />
              <label className="flex" htmlFor="ownerStartDate">
                When did you purchase the House?
              </label>
              <input
                className="border py-2 px-3 h-6 w-50 rounded-full bg-stone-200 border-black border"
                id="ownerStartDate"
                name="ownerStartDate"
                type="text"
                onChange={formik.handleChange}
              />
            </div>

            <div className="w-full px-3 mb-10">
              <label className="flex" htmlFor="otherComments">
                What is your challenge?
              </label>
              <input
                className="py-2 px-3 w-60 h-20 rounded-lg bg-stone-200 border-black border"
                id="otherComments"
                name="otherComments"
                type="text"
                onChange={formik.handleChange}
              />
            </div>
            <div className="border-black border-t border-b small-title border-b-1 border-black ">
              <div className="mb-1 px-3 small-title border-b border-black ">
                Your Details
              </div>
              <br></br>
              <div className="mt-2  px-3">
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
              <div className=" px-3">
                Please upload proof of home ownership, and property images
                <FileUploader />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4 mt-4">
          <button
            className="bottom-12 left-10 ml-3 bg-dark-green hover:bg-lime-900 text-white py-1 px-5 rounded-full"
            type="submit"
          >
            Submit Report
          </button>
        </div>
      </form>
    </div>
  )
}
