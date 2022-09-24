import React, { useEffect } from 'react'
import Header from '../subcomponents/Header'
import BasicPropertyInfo from '../subcomponents/PropertyDetails/BasicPropertyInfo'
import NoReports from '../subcomponents/PropertyDetails/NoReports'
import Report from '../subcomponents/PropertyDetails/Report'
import UserNavigation from '../subcomponents/UserNavigation'
import AdminNavigation from '../subcomponents/AdminNavigation'
import { useParams } from 'react-router-dom'

export default function PropertyDetails() {
  const { id } = useParams()

  useEffect(() => {}, [])
  return (
    <>
      <Header />
      <div className="page-width">
        <BasicPropertyInfo />
        {/* If theres no Report Available, render this */}
        <NoReports />
        {/* Else load this Report, and loop through all reports*/}
        <Report />
        <UserNavigation />
        {/* Admin Navigation */}
        <AdminNavigation />
      </div>
    </>
  )
}
