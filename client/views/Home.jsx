import React from 'react'
import video from '../../server/public/assets/Nest-bird.mp4'
import AddressSearch from '../subcomponents/HomePage/AddressSearch'
// import SiteDescription from '../subcomponents/HomePage/SiteDescription'

function homePage() {
  return (
    <>
      <div className="main">
        <video src={video} autoPlay loop muted />

        <div className="logo">Nested</div>

        <AddressSearch />
        {/* <SiteDescription /> */}
      </div>
    </>
  )
}

export default homePage
