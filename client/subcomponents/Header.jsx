import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="header-navigation">
      <h1>
        <Link to="/">Nested</Link>
      </h1>
    </div>
  )
}
