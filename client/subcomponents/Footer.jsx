import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    // <div className="footer">
    <div className="w-full flex flex-wrap mx-3 border-black border">
      <div className="flex flex-wrap mb-2">
        <div className="">
          <div className="w-full md:w-1/2 px-3 mb-4 pt-2">
            <h1>
              <Link to="/">Nested</Link>
            </h1>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-4 pt-2">
            <ul>
              <li>Contact</li>
              <li>Level 5/12 Morgan St, Newmarket, Auckalnd New Zealand</li>
              <li>INFO@KOHANGA.co.nz</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-4 pt-2">
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
      {/* </div> */}
    </div>
  )
}
