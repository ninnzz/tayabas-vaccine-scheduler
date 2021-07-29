import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, Container, Col, Row} from 'react-bootstrap';
import CurrentTime from './time.js';


class NavHeader extends Component {
  
  render() {
    return (
      <Navbar expand="lg" variant="dark" bg="primary">
        <Container>
          <Navbar.Brand href="#">Tayabas City Vaccination Program</Navbar.Brand>
          <Navbar.Text>
            <CurrentTime/>
          </Navbar.Text>
        </Container>
      </Navbar>
    );
  }
}

export default NavHeader; 