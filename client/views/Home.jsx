import React from 'react'
import video from '../../server/public/assets/Nest-bird.mp4'
import AddressSearch from '../subcomponents/HomePage/AddressSearch'
// import Footer from '../subcomponents/Footer'
// import SiteDescription from '../subcomponents/HomePage/SiteDescription'

function homePage() {
  return (
    <>
      <div className="main">
        <video src={video} autoPlay loop muted />

        <div className="logo uppercase">kōhanga</div>

        <AddressSearch />
        {/* <SiteDescription /> */}
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default homePage
