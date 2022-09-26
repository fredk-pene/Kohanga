import React, { useEffect, useState } from 'react'
import Header from '../subcomponents/Header'
import BasicPropertyInfo from '../subcomponents/PropertyDetails/BasicPropertyInfo'
import NoReports from '../subcomponents/PropertyDetails/NoReports'
import Report from '../subcomponents/PropertyDetails/Report'
import UserNavigation from '../subcomponents/UserNavigation'
import AdminNavigation from '../subcomponents/AdminNavigation'
import Buttons from '../subcomponents/PropertyDetails/Buttons'
import Footer from '../subcomponents/Footer'

import { useParams } from 'react-router-dom'
import { getRenterPropertyInformation } from '../api'

export default function PropertyDetails() {
  const [renterReports, setRenterReports] = useState([])
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  useEffect(async () => {
    setLoading(true)
    const reports = await getRenterPropertyInformation(id)
    setRenterReports(reports)
    setLoading(false)
  }, [])

  return (
    <>
      <Header />
      <div className="page-width">
        <BasicPropertyInfo reports={renterReports} />
        {!renterReports[0] ? (
          <NoReports />
        ) : loading ? (
          <p>loading...</p>
        ) : (
          renterReports.map(
            (report, i) => report && <Report report={report} key={i} />
          )
        )}

        {renterReports[0] && <Buttons reports={renterReports} />}
      </div>
      <UserNavigation />
      {/* Admin Navigation */}
      <AdminNavigation />
      <Footer />
    </>
  )
}
