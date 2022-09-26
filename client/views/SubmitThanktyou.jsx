import React from 'react'

import Footer from '../subcomponents/Footer'
import Header from '../subcomponents/Header'

function thankyou() {
  return (
    <>
      <Header />
      <div className="page-width">
        <div className="report-submit-container">
          <div className="report-submit-header">
            <h2 className="property-details-text">Report Submission</h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default thankyou
