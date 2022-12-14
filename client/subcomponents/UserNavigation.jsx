import React from 'react'
import { Link } from 'react-router-dom'

export default function UserNavigation({ address }) {
  return (
    <>
      <div className="navigation-bar">
        <Link className="back-to-search-btn" to="/">
          <img
            className="left-arrow"
            alt="left arrow"
            width="40px"
            src="/server/public/assets/left-arrow.svg"
          />
          &nbsp; Back to Search
        </Link>
        <Link
          to="/submit"
          state={{ address: address }}
          className="nav-submit-report-btn"
        >
          Submit Report
        </Link>
      </div>
    </>
  )
}
