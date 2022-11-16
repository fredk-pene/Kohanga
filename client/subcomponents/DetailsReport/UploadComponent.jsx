import React from 'react'
import { useDropzone } from 'react-dropzone'

export default function UploadComponent(props) {
  const { setFieldValue } = props
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFieldValue('files', acceptedFiles)
    },
  })
  return (
    <div>
      {}
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        {isDragActive ? ( 
           <div className='border border-black h-28 -w-28 border-2 border-dashed round-md mb-10 text-center	'>         
            <p>Drop the files here ...</p>
            </div>
        ) : (
          <div className='border border-black h-28 -w-28 border-2 border-dashed round-md mb-10 text-center	'>
            <p>Drag and drop some files here, or click to select files</p>
          </div>
        )}
      </div>
    </div>
  )
}
