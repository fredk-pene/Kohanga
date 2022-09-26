import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="footer flex flex-wrap mb-2">
      {/* <div className="flex flex-wrap mb-2"></div> */}
      <div className="w-full md:w-1/3">
        <h1>
          <div className="w-full md:w-1/3">
            <Link to="/">Nested</Link>
          </div>
        </h1>
        <div className="w-full md:w-1/3">
          <ul>
            <li>Contact</li>
            <li>Level 5/12 Morgan St, Newmarket, Auckalnd New Zealand</li>
            <li>info@KOHANGA.co.nz</li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <ul>
            <li>Resources</li>
            <li>How to Use</li>
            <li>Product Newsz</li>
            <li>Admin Login</li>
            <li>Submit Review</li>
            <li>Challenge Review</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
