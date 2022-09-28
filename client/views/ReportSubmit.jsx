import React, { useState } from 'react'
import OwnersReportForm from '../subcomponents/DetailsReport/OwnersReportForm'
import RenterReportForm from '../subcomponents/DetailsReport/RenterReportForm'
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
            <h2 className="property-details-text">Report Submission</h2>
            <p className="report-submit-copy">
              Please help any potential future renters of this house by filling
              in as many of these fields as possible. If you are unsure of any
              of the answers please leave the field blank. If you are the
              landlord or property manager for this property, make sure to
              toggle to the Landlord form just below.
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
            <OwnersReportForm address={sourceAddress} />
          ) : (
            <RenterReportForm address={sourceAddress} />
          )}
        </div>
      </div>
      <Footer />

    </>
  )
}
