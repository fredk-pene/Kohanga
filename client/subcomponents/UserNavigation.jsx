import React from 'react'
import { Link } from 'react-router-dom'

export default function UserNavigation() {
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
      </div>
    </>
  )
}
