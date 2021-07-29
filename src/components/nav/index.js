import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';


class NavHeader extends Component {
  
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          Tayabas City Vaccination
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}

export default NavHeader; 