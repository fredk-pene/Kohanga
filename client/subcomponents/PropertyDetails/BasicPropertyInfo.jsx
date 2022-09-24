import React from 'react'

export default function BasicPropertyInfo() {
  // this will be where the external API Data will come in:
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
            </div>
          </div>
        </div>
      </div>
      <div className="property-details-map"></div>
    </div>
  )
}
