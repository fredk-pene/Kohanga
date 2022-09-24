import React, { useEffect, useState } from 'react'
import Header from '../subcomponents/Header'
import BasicPropertyInfo from '../subcomponents/PropertyDetails/BasicPropertyInfo'
import NoReports from '../subcomponents/PropertyDetails/NoReports'
import Report from '../subcomponents/PropertyDetails/Report'
import UserNavigation from '../subcomponents/UserNavigation'
import AdminNavigation from '../subcomponents/AdminNavigation'
import Buttons from '../subcomponents/PropertyDetails/Buttons'
import { useParams } from 'react-router-dom'
import {
  getOwnerPropertyInformation,
  getRenterPropertyInformation,
} from '../api'

export default function PropertyDetails() {
  const [ownerReports, setOwnerReports] = useState([])
  const [renterReports, setRenterReports] = useState([])
  const [latestReport, setLatestReport] = useState([])
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  const allReports = [latestReport, ...renterReports, ...ownerReports]

  useEffect(async () => {
    setLoading(true)
    const ownerReports = await getOwnerPropertyInformation(id)
    const renterReports = await getRenterPropertyInformation(id)
    setOwnerReports(ownerReports)
    setRenterReports(renterReports)
    ownerReports[0]?.date_submitted > renterReports[0]?.date_submitted
      ? setLatestReport(renterReports[0])
      : setLatestReport(ownerReports[0])
    setLoading(false)
  }, [])

  return (
    <>
      <Header />
      <div className="page-width">
        <BasicPropertyInfo />
        {/* If theres no Report Available, render this */}
        {!allReports && <NoReports />}
        {/* Else load this Report, and loop through all reports*/}
        {loading ? (
          <p>loading...</p>
        ) : (
          allReports.map(
            (report, i) => report && <Report report={report} key={i} />
          )
        )}
        <Buttons />
        <UserNavigation />
        {/* Admin Navigation */}
        <AdminNavigation />
      </div>
    </>
  )
}
