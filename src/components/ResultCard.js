import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const ResultCard = ({ result, index }) => {
  // console.log(result, '<------')
  return (
    <Row className="resultCard">
      <Col xs={12} md={6} className="pictureContainer">
        <Image src={`${result.siteImg}`} className="picture" />
      </Col>
      <Col xs={12} md={6} className="infoContainer">
        <div className="nameContainer">
          <h3>{result.area}</h3>
        </div>
        <div className="descriptionContainer">
          <p>{result.description}</p>
        </div>
        <div className="buttonContainer">
          <Button className="moreInfoButton">
            MORE INFO
          </Button>
        </div>
      </Col>

    </Row>
  )
}

export default ResultCard;
