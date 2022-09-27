import React from 'react'

import Footer from '../subcomponents/Footer'
import Header from '../subcomponents/Header'
import { useLocation, Link } from 'react-router-dom'

function thankyou() {
  const { state } = useLocation()

  const address = state.address.replaceAll('-', ' ')

  return (
    <>
      <Header />
      <div className="page-width">
        <div className="report-submit-container">
          <div className="thankyou-report-response">
            <h2>
              Thank you for your report for {address}. It is now pending review.
              Please take this oppertunity to submit another or just have a look
              around.
            </h2>
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
