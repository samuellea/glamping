import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Nav from 'react-bootstrap/Nav';
import * as api from './api';
import SimpleMap from './SimpleMap';

class SitePage extends Component {

  state = {
    activities: [],
    area: '',
    bookingsClose: '',
    bookingsOpen: '',
    country: '',
    description: '',
    id: 0,
    pitches: [],
    postCode: '',
    siteImgs: [],
    lat: null,
    long: null,
    isLoading: true,
    error: null
  };

  render() {
    const { activities, area, bookingsClose, bookingsOpen, country, description, id, pitches, postCode, siteImgs, lat, long } = this.state;

    const areaFirstCaps = area.split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');

    // const availableFrom = new Date(bookingsOpen).toString();
    const availableFrom = new Date(bookingsOpen).toLocaleDateString(undefined, { month: "long", day: "numeric" })
    const availableUntil = new Date(bookingsClose).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });

    const iconReference = {
      'water sports': 'fas fa-swimmer',
      'hiking': 'fas fa-hiking',
      'villages': 'fas fa-beer',
      'questing': 'fas fa-compass',
      'elevenses': 'fas fa-utensils',
      'music': 'fas fa-music',
      'arts': 'fas fa-paint-brush',
      'camping': "fas fa-campground",
      'yurts': 'fas fa-igloo',
      'caravans': 'fas fa-shuttle-van',
      'shepherd huts': 'fas fa-candy-cane',
      'hobbit holes': 'fas fa-dungeon',
      'elven ruins': 'fas fa-chess-rook',
      'communes': 'fas fa-vihara',
    }

    return (
      <div className='sitePage'>
        <Container className="sitePageContainer">

          <Carousel interval={7000}>
            <Carousel.Item>
              <img
                // width={100}
                height={500}
                width={1000}
                style={{ objectFit: 'cover' }}
                className="d-block w-100 img-responsive"
                src={siteImgs[0]}
                alt="First slide"
                style={{ width: '50px' }}
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                height={500}
                style={{ objectFit: 'cover' }}
                className="d-block w-100 img-responsive"
                src={siteImgs[1]}
                alt="Third slide"
              />

              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                height={500}
                style={{ objectFit: 'cover' }}
                className="d-block w-100 img-responsive"
                src={siteImgs[2]}
                alt="Third slide"
              />

              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <div className="country h5 mt-3">
            <span>{country}</span>
            {/* <span style={{ float: 'right' }}>Back to search</span> */}
          </div>

          <div className="title h1 purpleTitle">
            {areaFirstCaps}
          </div>

          <div className="miniNav mt-2">
            <Row>
              <Col md={9} xs={12} >
                <Nav
                >
                  <Nav.Item>
                    <Nav.Link href="#aboutSection" className="h5">ABOUT</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#availability" className="h5">AVAILABILITY</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#mapContainer" className="h5">LOCATION</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col md={3} xs={12} style={{ width: '100%' }}>
                <button className="greenButton bookButton" onClick={() => alert("CONGRATION - U DONE IT")}>BOOK NOW</button>
              </Col>
            </Row>
          </div>

          <div className="aboutSection" id="aboutSection">
            <div className="about h2 mt-4 purpleTitle">
              About
            </div>
            <div className="description h5 mt-3">
              {description}
            </div>
          </div>

          <Row className="accActLegend mt-3">
            <Col className="accommodationLegend" xs={6} md={4}>
              <div className="purpleTitle h3 accommodationSubheading pb-2">Accommodation</div>
              {
                pitches.map(pitch => {
                  return (
                    <p>
                      <span className="h4 pr-3">
                        <i class={iconReference[pitch]} id="iconBox"></i>
                      </span>
                      <span className="h5">{pitch.split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')}</span>
                    </p>
                  )
                })
              }
            </Col>
            <Col className="activitiesLegend" xs={6} md={4}>
              <div className="purpleTitle h3 activitiesSubheading pb-2">Activities</div>
              {
                activities.map(activity => {
                  return (
                    <p>
                      <span className="h4 pr-3">
                        <i class={iconReference[activity]} id="iconBox"></i>
                      </span>
                      <span className="h5">{activity.split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')}</span>
                    </p>
                  )
                })
              }
            </Col>
          </Row>

          <div className="availability mb-5 mt-4" id="availability">
            <div className="availability-title h2 mt-4 purpleTitle">
              Availability
            </div>
            <div className="availability-dates md-h1 h3 text-success">
              <p>{availableFrom} - {availableUntil}</p>
            </div>

          </div>

          <div className="location h2 mt-4 mb-3 purpleTitle">Location</div>

          <div className="mapContainer pb-5" id="mapContainer">
            <SimpleMap lat={this.state.lat} long={this.state.long} className="billy" />
          </div>

        </Container>
      </div>
    );
  }


  componentDidMount() {
    const { id } = this.props;
    api.getSiteById(id).then((site) => {
      this.setState({
        activities: site.activities,
        area: site.area,
        bookingsClose: site.bookingsClose,
        bookingsOpen: site.bookingsOpen,
        country: site.country,
        description: site.description,
        id: site.id,
        pitches: site.pitches,
        postCode: site.postCode,
        siteImgs: site.siteImgs,
        isLoading: false
      })
    }).then(() => {
      const postCode = this.state.postCode.replace(/\s/g, '');
      api.getLatLongFromPostCode(postCode).then(({ lat, long }) => {
        this.setState({
          lat: lat,
          long: long
        })
      });
    }).catch(err => {
      this.setState({ isLoading: false, error: err })
    })

  }

}

export default SitePage;