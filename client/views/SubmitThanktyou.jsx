import React from 'react'

import Footer from '../subcomponents/Footer'
import Header from '../subcomponents/Header'

function thankyou() {
  return (
    <>
      <Header />
      <div className="page-width">
        <div className="report-submit-container">
          <div className="thankyou-report-response">
            <h2>
              <p>Thank you for your report. It is now pending review. </p>
              <p>
                Please take this oppertunity to submit another or just have a
                look around.
              </p>
            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default thankyou
