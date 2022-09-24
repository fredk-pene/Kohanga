import React from 'react'
import RentalInfo from './RentalInfo'
import HomeHealth from './HomeHealth'
import Sustainaibility from './Sustainability'
import Buttons from './Buttons'

export default function Report() {
  return (
    <div className="report-container">
      <RentalInfo />
      <HomeHealth />
      <Sustainaibility />
      <Buttons />
    </div>
  )
}
