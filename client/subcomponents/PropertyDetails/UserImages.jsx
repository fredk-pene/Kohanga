import React from 'react'

export default function UserImages({ report }) {
  return (
    <div className="full-report-column-container">
      <p className="small-title">User&apos;s Images</p>
      <div className="report-column-container property-details-secondary-text">
        <img
          src={
            report.photo
              ? report.photo
              : 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg'
          }
          alt="house"
        />
      </div>
    </div>
  )
}
