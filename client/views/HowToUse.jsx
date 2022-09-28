import React from 'react'

import Footer from '../subcomponents/Footer'
import Header from '../subcomponents/Header'
import { Link } from 'react-router-dom'

function howToUse() {
  return (
    <>
      <Header />
      <div className="page-width">
        <div className="report-submit-container">
          <div className="thankyou-report-response">
            <h2></h2>
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

export default howToUse
