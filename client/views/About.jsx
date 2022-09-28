import React from 'react'

import Footer from '../subcomponents/Footer'
import Header from '../subcomponents/Header'
import { Link } from 'react-router-dom'

function thankyou() {
  return (
    <>
      <Header />
      <div className="page-width">
        <div className="report-submit-container">
          <div className="thankyou-report-response">
            <h2>About</h2>
            <p>Kōhanga was brought to you by the No Limits Soldiers.</p>
            <Link className="back-to-search-btn thankyou-page" to="/">
              <img
                className="left-arrow"
                alt="left arrow"
                width="40px"
                src="/server/public/assets/left-arrow.svg"
              />
              &nbsp; Back to Search
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default thankyou
