import React from 'react'
import { useFormik } from 'formik'
import { useNavigate, useParams } from 'react-router-dom'
import * as Yup from 'yup'

const searchSchema = Yup.object().shape({
  address: Yup.string()
    .min(2, 'This must be at least 2 characters long')
    .max(50, 'continue'),
})

export default function addressSearch() {
  const { id } = useParams()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {
      navigate(`/property/${id}`)
    },
    validationSchema: searchSchema,
  })

  function showAnyErrors(inputName) {
    return formik.errors[inputName] && formik.touched[inputName] ? (
      <p className="inputError">{formik.errors[inputName]}</p>
    ) : null
  }

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="searchBar">
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
          {/* <button type="" className="">
            
          </button> */}
        </div>
      </form>
      <p className="homeDiscription">
        Enter an address to get a comprohensive property report, from renters
        like you.
      </p>
    </>
  )
}
