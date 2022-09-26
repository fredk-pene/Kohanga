import React from 'react'
import RentalInfo from '../PropertyDetails/RentalInfo'
import HomeHealth from '../PropertyDetails/HomeHealth'
import Sustainaibility from '../PropertyDetails/Sustainability'
import { changeReportStatus } from '../../api'

import UserImages from '../PropertyDetails/UserImages'

export default function Report({ report }) {
  // const id = report.id
  // async function approveReport() {
  //   await dispatch(changeReportStatus(id, status: 'approved'))
  // }

  return (
    <div className="report-container">
      <div className="report-header">
        <p className="small-title">{report.address}</p>
        <p className="property-details-secondary-text">
          Email:<br></br> {report.email}
        </p>
        <p className="property-details-secondary-text">
          {report.report_submitter}
        </p>
        <div className="report-submission-details">
          <p className="property-details-secondary-text">
            Submitted Report<br></br> {report.date_submitted}
          </p>
          <p className="property-details-secondary-text">
            Lived at the House<br></br> {report.date_submitted}
          </p>
          <p className="property-details-secondary-text">
            Occupancy in House<br></br> {report.occupancy} Flatmates
          </p>
          <p className="property-details-secondary-text">
            House Rating<br></br> {report.rate_home_health}/5
          </p>
        </div>
        <div className="property-details-additional-comments">
          <p className="property-details-secondary-text">
            Additional Comments:<br></br> {report.other_comments}
          </p>
        </div>
      </div>
      <div className="report-columns-container">
        <HomeHealth report={report} />
        <RentalInfo report={report} />
        <div className="report-end-column">
          <UserImages report={report} />
          <Sustainaibility report={report} />
        </div>
      </div>
      <div className="approve-buttons-container">
        <button onClick={approveReport} className="approve-buttons green">
          Approve
        </button>
        <button onClick={denyReport} className="approve-buttons red">
          {' '}
          Deny
        </button>
      </div>
    </div>
  )
}
