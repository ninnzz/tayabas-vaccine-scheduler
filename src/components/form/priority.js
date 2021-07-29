import React, { Component } from 'react';
import {ListGroup,Card, Form, Navbar, Nav, NavDropdown, Container, Col, Row} from 'react-bootstrap';

class Priority extends Component {
  
  render() {
    return (
          <Form.Group as={Row} className="mb-3">
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="first radio"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="second radio"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="radio"
                label="third radio"
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
              />
            </Col>
          </Form.Group>
       );
      }
    }

export default Priority;

