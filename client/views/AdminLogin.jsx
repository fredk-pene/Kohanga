import React, { useEffect, useState } from 'react'
import Header from '../subcomponents/Header'
import NoReports from '../subcomponents/PropertyDetails/NoReports'
import AdminReports from '../subcomponents/AdminPortal/AdminReports'
import AdminNavigation from '../subcomponents/AdminNavigation'

import { getPendingReports } from '../api'

export default function PropertyDetails() {
  const [reports, setReports] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(async () => {
    await loadReports()
  }, [])

  async function loadReports() {
    setLoading(true)
    const reports = await getPendingReports()
    setReports(reports)
    setLoading(false)
  }

  return (
    <>
      <Header />
      <div className="page-width">
        <div className="report-submit-header">
          <h2 className="property-details-text">Pending Submissions</h2>
          <p className="report-submit-copy">
            These are all of the reports that have been submitted and need to be
            approved. After checking that the data submitted looks legitimate,
            you can approve or deny the report with the buttons below each
            submission.
          </p>
        </div>
        {!reports ? (
          <NoReports />
        ) : loading ? (
          <p>loading...</p>
        ) : (
          reports.map((report, i) => (
            <AdminReports loadReports={loadReports} report={report} key={i} />
          ))
        )}
      </div>
      <AdminNavigation />
    </>
  )
}
