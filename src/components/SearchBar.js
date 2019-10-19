import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class SearchBar extends Component {
  state = {

  }
  render() {
    return (
      <Row className="searchBar">
        <Col xs={6} md={3} className="location" >location</Col >
        <Col xs={6} md={3} className="checkIn">checkIn</Col>
        <Col xs={6} md={3} className="checkOut">checkOut</Col>
        <Col xs={6} md={3} className="findButton">findButton</Col>
      </Row>
    )
  }
}

export default SearchBar;