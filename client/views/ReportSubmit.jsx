import React from 'react'
import OwnersReportForm from '../subcomponents/DetailsReport/OwnersReportForm'
import RenterReportForm from '../subcomponents/DetailsReport/RenterReportForm'

export default function ReportSubmit() {
  return (
    <div className="report-submit-container">
      {/* This will be where the toggle be  */}

      <OwnersReportForm />
      <RenterReportForm />
    </div>
  )
}
