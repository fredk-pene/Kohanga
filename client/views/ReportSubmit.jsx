import React, { useState } from 'react'
import OwnersReportForm from '../subcomponents/DetailsReport/OwnersReportForm'
import RenterReportForm from '../subcomponents/DetailsReport/RenterReportForm'
import Header from '../subcomponents/Header'

export default function ReportSubmit() {
  const [isLandlord, setIsLandlord] = useState(false)

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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p className="small-title">Reporting As:</p>
            <div className="report-toggle-switch">
              <p className="property-details-text">Tenant</p>
              <label className="switch">
                <input
                  name="reporter-toggle"
                  type="checkbox"
                  onChange={toggleSubmitter}
                />
                <span className="slider round"></span>
              </label>
              <p className="property-details-text">Landlord</p>
            </div>
          </div>
          {isLandlord ? <OwnersReportForm /> : <RenterReportForm />}
        </div>
      </div>
    </>
  )
}
