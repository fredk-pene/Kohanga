import React from 'react'

export default function addressSearch() {
  return (
    <>
      <div className="searchBar">
        {/* <p>This is the seach bar</p> */}
        <input type="text" placeholder="Search Address" />
        <p className="homeDiscription">
          Enter an address to get a comprohensive property report, from renters
          like you
        </p>
      </div>
    </>
  )
}
