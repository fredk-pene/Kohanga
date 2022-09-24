import React from 'react'
import BasicPropertyInfo from '../subcomponents/PropertyDetails/BasicPropertyInfo'
import NoReports from '../subcomponents/PropertyDetails/NoReports'
import Report from '../subcomponents/PropertyDetails/Report'
import UserNavigation from '../subcomponents/UserNavigation'
import AdminNavigation from '../subcomponents/AdminNavigation'

export default function PropertyDetails() {
  return (
    <>
      <BasicPropertyInfo />
      {/* If theres no Report Available, render this */}
      <NoReports />
      {/* Else load this Report, and loop through all reports*/}
      <Report />
      <UserNavigation />
      {/* Admin Navigation */}
      <AdminNavigation />
    </>
  )
}
