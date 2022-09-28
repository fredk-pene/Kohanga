import React from 'react'
import RentalInfo from './RentalInfo'
import HomeHealth from './HomeHealth'
import Sustainaibility from './Sustainability'

import UserImages from './UserImages'

export default function Report({ report }) {
  return (
    <div className="report-container">
      <div className="report-header">
        <p className="small-title">
          Latest Rental Report from&nbsp;
          {report.report_submitter[0].toUpperCase() +
            report.report_submitter.substring(1)}
        </p>
        <div className="report-submission-details">
          <p className="property-details-secondary-text">
            Submitted Report<br></br> {report.date_submitted}
          </p>
          <p className="property-details-secondary-text">
            Started Living at the House<br></br> {report.start_date}
          </p>
          <p className="property-details-secondary-text">
            Occupancy in House<br></br> {report.occupancy} Flatmates
          </p>
          {report.report_submitter != 'Landlord' && (
            <p className="property-details-secondary-text">
              House Rating<br></br> {report.rate_home_health}
            </p>
          )}
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
    </div>
  )
}
