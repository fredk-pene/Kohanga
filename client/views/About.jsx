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
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
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
