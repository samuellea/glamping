import React, { Component } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

function MyComponent(props) {
  console.log(props, ' ***')
  const containerStyle = {
    width: '100vw',
    height: '50vh'
  }

  const center = {
    lat: props.lat,
    lng: props.long
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center} />
      <></>
    </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)