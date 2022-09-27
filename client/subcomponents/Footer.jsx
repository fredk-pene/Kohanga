import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="footer">
      <div className="w-full flex flex-wrap mx-3 ">
        {/* <div className="flex flex-wrap mb-2"> */}

        {/* <div className="w-full md:w-1/2"> */}
        <div className=" w-full md:w-1/4 px-3 mb-4 pt-2 align-baseline text-center  text-4xl uppercase pt-20">
          {/* <h1 className=""> */}
          <Link to="/">kōhanga</Link>
          {/* </h1> */}
        </div>

        <div className="w=full md:w-1/4 px-3 mb-4 pt-2">
          <ul>
            <li>Contact</li>
            <br />
            <li>
              <Link to="https://goo.gl/maps/3pAQ6rS8AvnEapZ18">
                Level 5/12 Morgan St, Newmarket,
                <br />
                Auckalnd New Zealand
              </Link>
            </li>
            <br />
            <li>
              <a href="mailto:info@kohanga.co.nz">INFO@KOHANGA.CO.NZ</a>{' '}
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 px-3 mb-4 pt-2">
          <ul>
            <li>Resources</li>
            <br />
            <li>How to Use</li>
            <li>Product News</li>
            <li>
              <Link to="/admin">Admin Login</Link>
            </li>
            <li>
              <Link to="/submit">Submit Review</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
