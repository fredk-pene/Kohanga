import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminNavigation() {
  return (
    <>
      <div className="navigation-bar">
        <p className="back-to-search-btn">Admin Toolbar</p>
        <div className="admin-nav-btn-container">
          <Link to="/admin" className="nav-submit-report-btn">
            Admin Portal
          </Link>
          <Link to="/" className="nav-submit-report-btn">
            Back to Site
          </Link>
        </div>
      </div>
    </>
  )
}
