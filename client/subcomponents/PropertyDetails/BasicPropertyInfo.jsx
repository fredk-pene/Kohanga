import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchSampleData } from '../../api'

export default function BasicPropertyInfo() {
  const [sampleData, setSampleData] = useState({})
  const [loading, setLoading] = useState(false)
  const { id } = useParams()
  useEffect(async () => {
    setLoading(true)
    const addressData = await fetchSampleData(id)
    setSampleData(addressData)
    setLoading(false)
  }, [])

  const googleKey = 'AIzaSyD2sKeOJDzdVCq1njl1S0g2YW25GCgkC0w'
  return (
    <div className="property-details-container">
      {loading ? (
        <p>Loading....</p>
      ) : (
        <>
          <div className="property-details">
            <p className="small-title">Address:</p>
            <p className="property-details-text">{sampleData?.address}</p>

            <div className="property-details-individual">
              <p className="small-title">Property Details:</p>
              <div className="property-details-inside">
                <div className="details-pair">
                  <p className="property-details-secondary-text">Bedrooms</p>
                  <p className="property-details-text">
                    {sampleData?.bedrooms}
                  </p>
                </div>
                <div className="details-pair">
                  <p className="property-details-secondary-text">Bathrooms</p>
                  <p className="property-details-text">
                    {sampleData?.bathrooms}
                  </p>
                </div>
                <div className="details-pair">
                  <p className="property-details-secondary-text">Car Parks</p>
                  <p className="property-details-text">
                    {sampleData?.car_parks}
                  </p>
                </div>
                <div className="details-pair">
                  <p className="property-details-secondary-text">Internet</p>
                  <p className="property-details-text">
                    {sampleData?.internet}
                  </p>
                </div>
                <div className="details-pair">
                  <p className="property-details-secondary-text">Land Area</p>
                  <p className="property-details-text">
                    {sampleData?.land_area}m<sup>2</sup>
                  </p>
                </div>
                <div className="details-pair">
                  <p className="property-details-secondary-text">Floor Area</p>
                  <p className="property-details-text">
                    {sampleData?.floor_area}m<sup>2</sup>
                  </p>
                </div>
                <div className="details-pair">
                  <p className="property-details-secondary-text">Year Built</p>
                  <p className="property-details-text">
                    {sampleData?.year_built}{' '}
                  </p>
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
    &q=${sampleData?.address}`}
            ></iframe>
          </div>
        </>
      )}
    </div>
  )
}
