import React from 'react'
import video from '../../server/public/assets/bird-nest.mp4'

function videofn() {
  return (
    <>
      {/* <p>sdfs</p> */}

      <div className="main">
        <video src={video} autoPlay loop muted />
        <div className="content">
          <h1>Nested</h1>
        </div>
      </div>
    </>
  )
}

export default videofn
