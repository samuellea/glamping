import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class SimpleMap extends Component {
  render() {
    console.log(this.props)
    const { lat, long } = this.props;
    // const mapStyles = {
    //   // width: '50%',
    //   // height: '50%',
    //   padding: '0%',
    //   margin: '0%'
    // };
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
  apiKey: 'AIzaSyABmoMZcZje1cywQwARC6Xv9rw0KMYiFPQ'
})(SimpleMap);

// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class SimpleMap extends Component {

//   state = {
//     center: {
//       lat: '54.400864',
//       long: '-2.96611'
//     }
//   }

//   static defaultProps = {
//     center: {
//       lat: this.props.lat,
//       lng: this.props.long
//     },
//     zoom: 11
//   };

//   render() {
//     console.log(this.props, '<---')
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '50vh', width: '50%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: 'AIzaSyABmoMZcZje1cywQwARC6Xv9rw0KMYiFPQ' }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         // center={this.state.center}
//         >
//           <AnyReactComponent
//             lat={this.state.center.lat}
//             lng={this.state.center.long}
//             text="My Marker"
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }

//   componentDidMount() {
//     const { lat, long } = this.props;
//     console.log(lat);
//     console.log(long, '*');
//     this.setState({
//       center: {
//         lat: lat,
//         long: long
//       }
//     })
//   }
// }

// export default SimpleMap;