import React, { useEffect, useState } from 'react'
import Header from '../subcomponents/Header'
import NoReports from '../subcomponents/PropertyDetails/NoReports'
import AdminReports from '../subcomponents/AdminPortal/AdminReports'
import AdminNavigation from '../subcomponents/AdminNavigation'
// import { useParams } from 'react-router-dom'

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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
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
