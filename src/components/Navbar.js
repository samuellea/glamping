import React, { Component } from 'react';
import { Link } from "@reach/router";
import { Nav, Navbar } from 'react-bootstrap';

class NavigationBar extends Component {

  state = {
    navbarClass: "bigNavbar"
  }

  listenScrollEvent = () => {
    if ((document.documentElement.scrollTop > 50 && this.state.navbarClass === "bigNavbar")) {
      this.setState({
        navbarClass: "smallNavbar"
      })
    } else if (this.state.navbarClass === "smallNavbar" && document.documentElement.scrollTop < 50) {
      this.setState({
        navbarClass: "bigNavbar"
      })
    }

  }

  render() {

    return (
      <div className={`${this.state.navbarClass}`}>
        <Navbar expand="lg" fixed="top" variant="dark">
          <Link to={"/"}>
            <Navbar.Brand className="roundTitle"><span style={{ color: '#4C2A66' }}>Northcoders</span><span style={{ color: 'white' }}>Glamping</span></Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbarTogglez" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ml-auto concertinaBit">
              <Nav.Item className="xyzz">
                <Nav.Link>
                  <Link to="/search">
                    <div className="navbarOption">
                      <span className="navbarIcon"><i class="fas fa-search fa-xs"></i></span>
                      <span className="h5 mb-0">Search</span>
                    </div>
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <div className="navbarOption">
                    <span className="navbarIcon"><i class="far fa-question-circle fa-xs"></i></span>
                    <span className="h5 mb-0">About</span>
                  </div>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )

  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

}

export default NavigationBar;
