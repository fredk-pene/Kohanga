import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { useNavigate, Link } from 'react-router-dom'
import * as Yup from 'yup'
import { getAddressSuggestions } from '../../api'

const searchSchema = Yup.object().shape({
  address: Yup.string()
    .min(2, 'This must be at least 2 characters long')
    .max(50, 'continue'),
})

export default function addressSearch() {
  const [suggestions, setSuggestions] = useState('')
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {
      navigate(
        `/property/${suggestions.addresses[0].FullAddress.replaceAll(',', '')
          .replace(/\s/g, '-')
          .replace('/', '!2F')}`
      )
    },
    validationSchema: searchSchema,
  })

  useEffect(async () => {
    const input = formik.values['autocomplete-search']
    const formatted = input?.replace(/\s/g, '+')
    const addresses = await getAddressSuggestions(formatted)
    setSuggestions(addresses)
  }, [formik.values])

  function showAnyErrors(inputName) {
    return formik.errors[inputName] && formik.touched[inputName] ? (
      <p className="inputError">{formik.errors[inputName]}</p>
    ) : null
  }

  function formatAddressToString(address) {
    return address?.replaceAll(',', '').replace(/\s/g, '-').replace('/', '!2F')
  }

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="search-container">
          <div className="searchBar ml-56 -mr-4">
            {/* <p>This is the seach bar</p> */}
            {showAnyErrors('address')}
            <input
              type="text"
              placeholder="Search Address"
              id="autocomplete-search"
              autoComplete="off"
              onChange={formik.handleChange}
              value={formik.values.address}
            />
            {suggestions?.addresses && (
              <div className="address-suggestions-container">
                {suggestions?.addresses.map((address) => {
                  return (
                    <Link
                      to={`/property/${formatAddressToString(
                        address.FullAddress
                      )}`}
                      key={address.DPID}
                      className="suggested-address"
                    >
                      {address.FullAddress}
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </form>
      <p className="homeDiscription">
        Enter an address to get a<br></br> comprehensive property report,
        <br></br> from renters like you.
      </p>
    </>
  )
}
