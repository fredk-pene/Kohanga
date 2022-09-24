import React from 'react'

export default function Sustainability({ report }) {
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
        <p className="small-title">Sustainability</p>
        <div className="report-column-container property-details-secondary-text">
          <div className="detailed-report-item">
            <p>Power Sources</p>
            {report.energy_sources}
          </div>
          <div className="detailed-report-item">
            <p>Watertank</p>
            {showIcon('water_tank')}
          </div>
          <div className="detailed-report-item">
            <p>Composting</p>
            {showIcon('composting_system')}
          </div>
          <div className="detailed-report-item">
            <p>Garden</p>
            <p>{report.garden}</p>
          </div>
        </div>
      </div>
    </>
  )
}
