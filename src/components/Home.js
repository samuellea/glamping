import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { Link } from "@reach/router";
import Homegif from '../assets/campingdribble2.gif';
import Footer from './Footer';

import Camping from '../assets/camping.jpeg';
import Caravan from '../assets/Caravan.jpeg';
import Commune from '../assets/Commune.jpeg';
import Hobbithole from '../assets/hobbithole.jpeg';
import Shepherdhut from '../assets/shepherdhut.jpeg';
import Yurt from '../assets/Yurt.jpeg';

import Hiking from '../assets/hiking.jpeg';
import Music from '../assets/music.jpeg';
import Arts from '../assets/arts.jpg';
import Questing from '../assets/questing.jpeg';
import Villages from '../assets/villages.jpg';
import Watersports from '../assets/watersports.jpeg';



class Home extends Component {
  // state = {

  // }
  render() {
    // const { categories } = this.state;
    return (
      <div className="home">
        <Container className="landingContainer" fluid={true}>
          <Row className="pic">

            <div class="image-holder">
              <img src={Homegif} class="card-img-top img-fluid homegif" />
            </div>

          </Row>

          <Row className="text font-weight-bold h3">
            <div>We've been helping users find their</div>
            <div>dream getaways since 2023</div>
            <div style={{ color: '#9f5ad5' }}>#BoutiqueGlamping</div>
          </Row>
          <Row className="button">
            <Link to={"/search"}>
              <Button className="greenButton findMineButton">
                FIND MINE
              </Button>
            </Link>
          </Row>


          <Row className="activitiesWindowLabel font-weight-bold h3">
            <div>Whatever your interests - </div>
            <div style={{ color: '#9f5ad5' }}>the perfect glamping experience awaits!</div>
          </Row>

          <Row className="activitiesWindowTop">
            <Col md={3} xs={12}>
              <img src={Questing} class="img-fluid" />
              <div class="centered">Questing</div>
            </Col>

            <Col md={3} xs={12}>
              <img src={Villages} class="img-fluid" />
              <div class="centered">Villages</div>
            </Col>

            <Col md={6} xs={12}>
              <img src={Hiking} class="img-fluid" />
              <div class="centered">Hiking</div>
            </Col>

          </Row>

          <Row className="activitiesWindowBottom">
            <Col md={6} xs={12}>
              <img src={Watersports} class="img-fluid" />
              <div class="centered">Watersports</div>
            </Col>
            <Col md={3} xs={12}>
              <img src={Music} class="img-fluid" />
              <div class="centered">Music</div>
            </Col>
            <Col md={3} xs={12}>
              <img src={Arts} class="img-fluid" />
              <div class="centered">Arts</div>
            </Col>
          </Row>

          <Row className="accommodationWindowLabel font-weight-bold h3">
            <div>Accommodation to suit you - </div>
            <div style={{ color: '#9f5ad5' }}>adventurous, fabulous and everything in-between...</div>
          </Row>

          <Row className="accommodationWindowTop">
            <Col md={3} xs={12}>
              <img src={Commune} class="img-fluid" />
              <div class="centered">Communes</div>
            </Col>
            <Col md={3} xs={12}>
              <img src={Shepherdhut} class="img-fluid" />
              <div class="centered">Shepherd Huts</div>
            </Col>
            <Col md={6} xs={12}>
              <img src={Caravan} class="img-fluid" />
              <div class="centered">Caravans</div>
            </Col>
          </Row>

          <Row className="accommodationWindowBottom">
            <Col md={6} xs={12}>
              <img src={Yurt} class="img-fluid" />
              <div class="centered">Yurts</div>
            </Col>
            <Col md={3} xs={12}>
              <img src={Hobbithole} class="img-fluid" />
              <div class="centered">Hobbit Holes</div>
            </Col>
            <Col md={3} xs={12}>
              <img src={Camping} class="img-fluid" />
              <div class="centered">Camping</div>
            </Col>
          </Row>


        </Container>


      </div >
    )
  }

}

export default Home;
