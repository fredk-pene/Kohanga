import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import UploadComponent from './UploadComponent'

export default function FileUploader() {

  return (
    <div className="container">
      <Formik
        initialValues={{ files: null }}
        onSubmit={(values) => {
          console.log({
            files: values.files.map((file) => ({
              fileName: file.name,
              type: file.type,
              size: `${file.size} bytes`,
            })),
          })
        }}
        validationSchema={yup.object().shape({
          files: yup.mixed().required(),
        })}
        render={({ values, handleSubmit, setFieldValue }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="file"> </label>

                <UploadComponent setFieldValue={setFieldValue} />
                {values.files &&
                  values.files.map((file, i) => (
                    <li key={i}>
                      {`File:${file.name} Type:${file.type} Size:${file.size} bytes`}{' '}
                    </li>
                    
                  ))}
              </div>
            </form>
          )
        }}
      />
    </div>
  )
}
