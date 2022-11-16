import React from 'react'
import RentalInfo from '../PropertyDetails/RentalInfo'
import HomeHealth from '../PropertyDetails/HomeHealth'
import Sustainaibility from '../PropertyDetails/Sustainability'
import { changeReportStatus } from '../../api'
import moment from 'moment'
import UserImages from '../PropertyDetails/UserImages'

export default function Report({ report, loadReports }) {
  async function approveReport() {
    const id = report.id
    await changeReportStatus({ id, status: 'Approved' })
    await loadReports()
  }

  async function denyReport() {
    const id = report.id
    await changeReportStatus({ id, status: 'denied' })
    await loadReports()
  }

  return (
    <div className="report-container">
      <div className="report-header">
        <p className="small-title">
          Report ID: {report.id}&nbsp;&nbsp;&nbsp;&nbsp;Applicant:&nbsp;
          {report.report_submitter}&nbsp;&nbsp;&nbsp;&nbsp;Status:&nbsp;
          {report.status}
        </p>

        <div className="report-submission-details">
          <p className="property-details-secondary-text">
            Address:<br></br> {report.address}
          </p>
          <p className="property-details-secondary-text">
            Email:<br></br> {report.email}
          </p>
          <p className="property-details-secondary-text">
            Submitted Report<br></br>{' '}
            {moment(report.date_submitted, 'DDMMYYYY').format('MMM Do, YYYY')}
          </p>
          <p className="property-details-secondary-text">
            Lived at the House<br></br>{' '}
            {moment(report.start_date, 'DDMYYYY').format('MMM Do, YYYY')}
          </p>
          <p className="property-details-secondary-text">
            Occupancy in House<br></br> {report.occupancy} Flatmates
          </p>
          <p className="property-details-secondary-text">
            House Rating<br></br> {report.rate_home_health}{' '}
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
        <button onClick={approveReport} className="nav-submit-report-btn green">
          Approve
        </button>
        <button onClick={denyReport} className="nav-submit-report-btn red">
          {' '}
          Deny
        </button>
      </div>
    </div>
  )
}
