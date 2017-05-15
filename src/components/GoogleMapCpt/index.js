import React from "react"
import PropTypes from 'prop-types'
import styles from './index.css'

import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";


const GoogleMapCpt = (props)=>{
  return(
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={3}
      defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
      onClick={props.onMapClick}
    >
      {props.markers.map((marker, index) => (
        <Marker
          {...marker}
          onRightClick={() => props.onMarkerRightClick(index)}
        />
      ))}
    </GoogleMap>
  )
}

GoogleMapCpt.propTypes = {
  return(

  )
}

export default GoogleMapCpt
