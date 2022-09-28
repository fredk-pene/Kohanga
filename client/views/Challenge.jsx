import React, { useState } from 'react'
import OwnersChallengeForm from '../subcomponents/DetailsReport/OwnersChallengeForm'
import RenterChallengeForm from '../subcomponents/DetailsReport/RenterChallengeForm'
import Header from '../subcomponents/Header'
import { useLocation } from 'react-router-dom'
import Footer from '../subcomponents/Footer'

export default function ReportSubmit() {
  const [isLandlord, setIsLandlord] = useState(false)
  const location = useLocation()
  let sourceAddress = ''

  if (location.state) {
    sourceAddress = location.state.address.replaceAll('-', ' ')
  } else {
    sourceAddress = ''
  }

  function toggleSubmitter(e) {
    const isChecked = e.target.checked
    setIsLandlord(isChecked)
  }

  return (
    <>
      <Header />
      <div className="page-width">
        <div className="report-submit-container">
          <div className="report-submit-header">
            <h2 className="property-details-text">Challenge</h2>
            <p className="report-submit-copy">
              If you see anything wrong with any report, please feel free to
              submit a challenge here.
            </p>
            <p className="small-title">Reporting As:</p>
            <div className="report-toggle-switch">
              <p className="toggle-details-text">Tenant</p>
              <label className="switch">
                <input
                  name="reporter-toggle"
                  type="checkbox"
                  onChange={toggleSubmitter}
                />
                <span className="slider round"></span>
              </label>
              <p className="toggle-details-text">Landlord</p>
            </div>
          </div>
          {isLandlord ? (
            <OwnersChallengeForm address={sourceAddress} />
          ) : (
            <RenterChallengeForm address={sourceAddress} />
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}
