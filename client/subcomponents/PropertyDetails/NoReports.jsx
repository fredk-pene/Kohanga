import React from 'react'
import { Link } from 'react-router-dom'

export default function NoReports() {
  return (
    <>
      <div className="no-report-container">
        <div className="report-header">
          <p className="back-to-search-btn">
            Unfortunately theres not been any reports for this property yet.
          </p>
          <Link className="back-to-search-btn" to="/">
            <img
              className="left-arrow"
              alt="left arrow"
              width="40px"
              src="/server/public/assets/left-arrow.svg"
            />
            &nbsp; Back to Search
          </Link>
        </div>
        <Link to="/submit" className="nav-submit-report-btn">
          Submit Report
        </Link>
      </div>
    </>
  )
}
