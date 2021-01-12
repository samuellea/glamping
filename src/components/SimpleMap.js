import React, { Component } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


function MyComponent(props) {

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
    googleMapsApiKey: 'AIzaSyCjrB3w6LNwgCcL_MBfIyL7sFTw15aqeaE'
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
      { /* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)


//   apiKey: 'AIzaSyCjrB3w6LNwgCcL_MBfIyL7sFTw15aqeaE'