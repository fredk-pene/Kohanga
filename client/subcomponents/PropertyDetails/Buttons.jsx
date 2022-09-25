import React from 'react'
import { Link } from 'react-router-dom'

export default function Button() {
  return (
    <>
      <div className="report-challenge-btn-bar">
        <div className="report-challenge-btn-bar">
          <p className="back-to-search-btn">See Something thats not right?</p>
          <Link to="/challenge" className="nav-submit-report-btn">
            Challenge Report
          </Link>
        </div>
      </div>
    </>
  )
}
