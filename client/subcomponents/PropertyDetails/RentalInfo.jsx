import React from 'react'

export default function RentalInfo({ report }) {
  function showIcon(key) {
    return report[key] ? (
      <span className="material-symbols-outlined">done</span>
    ) : (
      <span className="material-symbols-outlined">close</span>
    )
  }
  return (
    <>
      <div className="full-report-column-container">
        <p className="small-title">Rental Info</p>
        <div className="report-column-container">
          <div className="detailed-report-item">
            <p className="report-title">Current Rent</p>
            <p>${report.current_rent}</p>
          </div>
          <div className="detailed-report-container">
            <div className="detailed-report-item">
              <p className="report-title">Bond</p>
              <p>${report.bond}</p>
            </div>
            <div className="detailed-report-item">
              <p className="report-title">Rent in Advance</p>
              <p>${report.rent_advance}</p>
            </div>
          </div>

          {report.report_submitter != 'Landlord' && (
            <>
              <p className="report-title">Property Manager</p>
              <div className="detailed-report-container">
                <div className="detailed-report-item">
                  <p>Responsiveness</p>
                  <p>{report.rate_property_manager_responsiveness}</p>
                </div>
                <div className="detailed-report-item">
                  <p>Rating</p>
                  <p>{report.ate_property_manager}</p>
                </div>
              </div>
            </>
          )}
          <div className="detailed-report-item">
            <p>Security System</p>
            {showIcon('security_system')}
          </div>
          <div className="detailed-report-item">
            <p>Neighborhood Noise</p>
            <p>{report.neighborhood_noise}</p>
          </div>
        </div>
      </div>
    </>
  )
}
