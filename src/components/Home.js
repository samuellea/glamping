import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from "@reach/router";

class Home extends Component {
  // state = {

  // }
  render() {
    // const { categories } = this.state;
    return (
      <div className="home">
        <Container className="landingContainer" fluid={true}>
          <Row className="pic">
            Pic
          </Row>
          <Row className="text">
            We've been helping users find their
            dream getaways since 2019
            #NorthcodersGlamping
            </Row>
          <Row className="button">
            <Link to={"/search"}>
              <Button className="greenButton">
                FIND MINE
              </Button>
            </Link>
          </Row>

        </Container>
        {/* <div>
          MORE SHIT HERE ;)
      </div> */}
      </div>
    )
  }

}

export default Home;
