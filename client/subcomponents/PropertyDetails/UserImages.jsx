import React from 'react'

export default function UserImages({ report }) {
  return (
    <div className="full-report-column-container">
      <p className="small-title">User&apos;s Images</p>
      <div className="report-column-container property-details-secondary-text">
        <img src={(report = report.photo)} width="200" alt="house" />
        <p>Photos</p>
      </div>
    </div>
  )
}
