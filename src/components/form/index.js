import React, { Component } from 'react';
import {ListGroup,Card,Button, Form, Navbar, Nav, NavDropdown, Container, Col, Row} from 'react-bootstrap';
import Priority from './priority.js';
import PriorityList from './priorityList.js';

class RegForm extends Component {
  
  render() {
    return (
    	<Form>
    	  <Row className="mb-3">
		    <h3> Personal Information </h3>
		  </Row>
		  <Row className="mb-3">
		    <Form.Group as={Col} controlId="FirstName">
		      <Form.Label>First Name</Form.Label>
		      <Form.Control type="firstName" placeholder="Enter Name" />
		    </Form.Group>

		    <Form.Group as={Col} controlId="middleName">
		      <Form.Label>Middle Name</Form.Label>
		      <Form.Control type="middleName" placeholder="Enter Name" />
		    </Form.Group>

		    <Form.Group as={Col} controlId="lastName">
		      <Form.Label>Password</Form.Label>
		      <Form.Control type="lastName" placeholder="Enter Name" />
		    </Form.Group>

		    <Form.Group as={Col} controlId="suffix">
		      <Form.Label>Suffix</Form.Label>
		      <Form.Select defaultValue="Choose...">
		        <option>Choose...</option>
		        <option>...</option>
		      </Form.Select>
		    </Form.Group>
		  </Row>

		  <Row className="mb-3">
		  	<Form.Group as={Col} controlId="month">
		      <Form.Label>Date of Birth</Form.Label>
		      <Form.Select defaultValue="Choose...">
		        <option>Choose Month...</option>
		        <option>...</option>
		      </Form.Select>
		    </Form.Group>
		    <Form.Group as={Col} controlId="day">
		      <Form.Label>Day</Form.Label>
		      <Form.Control type="day" placeholder="Day" />
		    </Form.Group>
		    <Form.Group as={Col} controlId="month">
		      <Form.Label>Year</Form.Label>
		      <Form.Control type="year" placeholder="Year" />
		    </Form.Group>
		    <Form.Group as={Col} controlId="sex">
		      <Form.Label>Sex</Form.Label>
		      <Form.Select defaultValue="Choose...">
		        <option>Choose...</option>
		        <option>...</option>
		      </Form.Select>
		    </Form.Group>
		  </Row>

		  <Row className="mb-3">
		    <Form.Group as={Col} controlId="barangay">
		      <Form.Label>Barangay</Form.Label>
		      <Form.Select defaultValue="Choose...">
		        <option>Choose...</option>
		        <option>...</option>
		      </Form.Select>
		    </Form.Group>
		    <Form.Group as={Col} controlId="contactNumber">
		      <Form.Label>Contact Number</Form.Label>
		      <Form.Control type="contactNumber" placeholder="09*********" />
		    </Form.Group>
		  </Row>

		  <Row className="mb-3">
		    <h3> Priority Status </h3>
		  </Row>
		  <Row className="mb-3">
			<Col><Priority/></Col>
			<Col md={10}><PriorityList/></Col>
		  </Row>

		  <Row className="mb-3">
		    <h3> IDs to bring: </h3>
		  </Row>
		  <Row className="mb-3">
		    <Form>
		    {['passport', 'license', 'sss'].map((type) => (
		    <div key={`default-checkbox`} className="mb-3">
		      <Form.Check 
		        type={'checkbox'}
		        id={`default-checkbox`}
		        label={`default checkbox`}
		      />
		    </div>
		    ))}
		    </Form>
		  </Row>
		  <Row>
		    <Col Col md={{ span: 4, offset: 10 }}>
		      <Form.Check
		        type="checkbox"
		        id="autoSizingCheck"
		        className="mb-2"
		        label="Remember me"
		      />
		    </Col>
		    <Col Col md={{ span: 4, offset: 10 }}>
		      <Button type="submit" className="mb-2">
		        Submit
		      </Button>
		    </Col>
		  </Row>

		</Form>
    );
  }
}

export default RegForm; 