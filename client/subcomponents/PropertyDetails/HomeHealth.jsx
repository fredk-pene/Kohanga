import React from 'react'

export default function HomeHealth({ report }) {
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
        <p className="small-title">Home Health</p>
        <div className="report-column-container property-details-secondary-text">
          <p className="report-title">Insulation:</p>
          <div className="detailed-report-container">
            <div className="detailed-report-item">
              <p>Ceiling</p>
              {showIcon('home_health_insulation_ceiling')}
            </div>
            <div className="detailed-report-item">
              <p>Floor</p>
              {showIcon('home_health_insulation_floor')}
            </div>
            <div className="detailed-report-item">
              <p>Walls</p>
              {showIcon('home_health_insulation_wall')}
            </div>
          </div>
          <p className="report-title">Extraction:</p>
          <div className="detailed-report-container">
            <div className="detailed-report-item">
              <p>Bathroom Extraction</p>
              {showIcon('home_health_extractor_fan')}
            </div>
            <div className="detailed-report-item">
              <p>Kitchen Rangehood</p>
              {showIcon('home_health_rangehood')}
            </div>
          </div>
          <div className="detailed-report-item">
            <p className="report-title">Heating</p>
            {showIcon('heating')}
            <p>{report.heating}</p>
          </div>
          <div className="detailed-report-item">
            <p className="report-title">Double Glazing</p>
            {showIcon('double_glazed')}
          </div>
          <div className="detailed-report-item">
            <p className="report-title">Ventilation</p>
            {showIcon('ventilation_system')}
          </div>
          <div className="detailed-report-item">
            <p className="report-title">Fire/Smoke alarm</p>
            {showIcon('fire_alarms')}
          </div>
        </div>
      </div>
    </>
  )
}
