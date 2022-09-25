import React, { useState, useEffect } from 'react'

export default function BasicPropertyInfo() {
  const [sampleData, setSampleData] = useState({})

  useEffect(() => {}, [])

  const googleKey = 'AIzaSyD2sKeOJDzdVCq1njl1S0g2YW25GCgkC0w'
  const address =
    '393 Wairau Road, Milford-Glenfield, Auckland 0629, New Zealand'

  return (
    <div className="property-details-container">
      <div className="property-details">
        <p className="small-title">Address:</p>
        <p className="property-details-text">
          393 Wairau Road, Milford-Glenfield, Auckland 0629, New Zealand
        </p>

        <div className="property-details-individual">
          <p className="small-title">Property Details:</p>
          <div className="property-details-inside">
            <div className="details-pair">
              <p className="property-details-secondary-text">Bedrooms</p>
              <p className="property-details-text">4</p>
            </div>
            <div className="details-pair">
              <p className="property-details-secondary-text">Bathrooms</p>
              <p className="property-details-text">2</p>
            </div>
            <div className="details-pair">
              <p className="property-details-secondary-text">Car Parks</p>
              <p className="property-details-text">2</p>
            </div>
            <div className="details-pair">
              <p className="property-details-secondary-text">Internet</p>
              <p className="property-details-text">Fibre</p>
            </div>
            <div className="details-pair">
              <p className="property-details-secondary-text">Land Area</p>
              <p className="property-details-text">
                612m<sup>2</sup>
              </p>
            </div>
            <div className="details-pair">
              <p className="property-details-secondary-text">Floor Area</p>
              <p className="property-details-text">
                145m<sup>2</sup>
              </p>
            </div>
            <div className="details-pair">
              <p className="property-details-secondary-text">Year Built</p>
              <p className="property-details-text">1910 </p>
            </div>
          </div>
        </div>
      </div>
      <div className="property-details-map">
        <iframe
          title="map"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=${googleKey}
    &q=${address}`}
        ></iframe>
      </div>
    </div>
  )
}
