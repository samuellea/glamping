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
        <Navbar expand="lg" fixed="top">
          <Link to={"/"}>
            <Navbar.Brand>NorthcodersGlamping</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link>
                  <Link to="/search">Search</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="/about">About</Link>
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
