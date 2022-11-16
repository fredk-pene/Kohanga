import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchSampleData } from '../../api'

export default function BasicPropertyInfo({ reports }) {
  let [sampleData, setSampleData] = useState({})
  const [loading, setLoading] = useState(false)
  const { id } = useParams()
  const urlAddress = id.replaceAll('-', ' ').replace('!2F', '/')
  useEffect(async () => {
    setLoading(true)
    const addressData = await fetchSampleData(id)
    setSampleData(addressData)
    setLoading(false)
  }, [])

  if (!reports[0]) {
    sampleData = {
      address: urlAddress,
      bedrooms: 4,
      bathrooms: 2,
      car_parks: 1,
      internet: 'Fibre',
      land_area: 640,
      floor_area: 120,
      year_built: '1960s',
    }
  }

  const googleKey = ''
  return loading ? (
    <p>Loading....</p>
  ) : (
    <div>
      <div className="property-details-container">
        <div className="property-details-left">
          <div className="property-details-header">
            <p className="small-title">Address:</p>
            <p className="property-details-text address-header ">
              {sampleData?.address}
            </p>
          </div>
          <div className="property-details-individual">
            <p className="small-title">Property Details:</p>
            <div className="property-details-inside">
              <div className="details-pair">
                <p className="property-details-secondary-text">Bedrooms</p>
                <p className="property-details-text">{sampleData?.bedrooms}</p>
              </div>
              <div className="details-pair">
                <p className="property-details-secondary-text">Bathrooms</p>
                <p className="property-details-text">{sampleData?.bathrooms}</p>
              </div>
              <div className="details-pair">
                <p className="property-details-secondary-text">Car Parks</p>
                <p className="property-details-text">{sampleData?.car_parks}</p>
              </div>
              <div className="details-pair">
                <p className="property-details-secondary-text">Internet</p>
                <p className="property-details-text">{sampleData?.internet}</p>
              </div>
              <div className="details-pair">
                <p className="property-details-secondary-text">Land Area</p>
                <p className="property-details-text">
                  {sampleData?.land_area}
                  {sampleData?.land_area != 'N/A' && (
                    <>
                      <p style={{ display: 'inline-block' }}>m</p> <sup>2</sup>
                    </>
                  )}
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
            className="map"
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
      </div>
    </div>
  )
}
