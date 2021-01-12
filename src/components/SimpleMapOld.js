import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class SimpleMap extends Component {
  render() {
    const { lat, long } = this.props;
    const mapStyles = {
      width: '100%',
      height: '100%'
    }
    return (
      <>
        {
          this.props.lat !== null ?
            <Map
              className="simpleMap"
              google={this.props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{ lat: lat, lng: long }}
            >
              <Marker position={{ lat: lat, lng: long }} style={{ color: 'pink' }} />
            </Map>
            : null
        }
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'API KEY GOES HERE' // defunct, has been changed
})(SimpleMap);