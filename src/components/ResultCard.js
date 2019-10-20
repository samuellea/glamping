import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { Link } from "@reach/router";


const ResultCard = ({ result, index }) => {
  console.log(result, '<------')
  const areaFirstCaps = result.area.split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
  return (
    <Link to={`/sites/${result.id}`} style={{ textDecoration: 'none' }}>

      <Row className="resultCard" >
        <Col xs={12} md={6} className="pictureContainer">
          <Image src={`${result.siteImgs[0]}`} className="picture" />
        </Col>
        <Col xs={12} md={6} className="infoContainer">
          <div className="nameContainer">
            <h3>{areaFirstCaps}</h3>
          </div>
          <div className="descriptionContainer">
            <p>{result.description}</p>
          </div>
          <div className="buttonContainer">
            <Button className="greenButton moreInfoButton">
              MORE INFO
          </Button>
          </div>
        </Col>

      </Row>
    </Link>
  )
}

export default ResultCard;
