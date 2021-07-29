import React, { Component } from 'react';
import {Container, Form, Button, Row, Col, Navbar, Nav, NavDropdown} from 'react-bootstrap';

class regForm extends Component {
	render() {
		return(
  			<Form>
  				<Row className="mb-3">
  					<Form.Group as={Col} controlId="validationCustom01">
  						<Form.Label>First name</Form.Label>
  						<Form.Control
				            required
				            type="text"
				            placeholder="First name"
				        />
				    </Form.Group>
  					<Form.Group as={Col} controlId="validationCustom02">
  						<Form.Label>Middle Name</Form.Label>
  						<Form.Control
				            required
				            type="text"
				            placeholder="Middle name"
				        />
				    </Form.Group>
				    <Form.Group as={Col} controlId="validationCustom03">
  						<Form.Label>Last Name</Form.Label>
  						<Form.Control
				            required
				            type="text"
				            placeholder="Last name"
				        />
				    </Form.Group>
				    <Form.Group as={Col} controlId="validationCustom04">
      					<Form.Label>Suffix</Form.Label>
      					<Form.Select defaultValue="Choose...">
        					<option>Choose...</option>
        					<option>...</option>
      					</Form.Select>
    				</Form.Group>
    			</Row>
    			<Row className="mb-3">
    				<Form.Group as={Col} controlId="validationCustom05">
      					<Form.Label>Birth Date</Form.Label>
      					<Form.Select defaultValue="Choose...">
        					<option>Month</option>
        					<option>...</option>
      					</Form.Select>
    				</Form.Group>
    				<Form.Group as={Col} controlId="validationCustom06">
      					<Form.Select defaultValue="Choose...">
        					<option>Day</option>
        					<option>...</option>
      					</Form.Select>
    				</Form.Group>
    				<Form.Group as={Col} controlId="validationCustom07">
      					<Form.Select defaultValue="Choose...">
        					<option>Year</option>
        					<option>...</option>
      					</Form.Select>
    				</Form.Group>
    				<Form.Group as={Col} controlId="validationCustom08">
      					<Form.Label>Sex</Form.Label>
      					<Form.Select defaultValue="Choose...">
        					<option>Select</option>
        					<option>...</option>
      					</Form.Select>
    				</Form.Group>
    			</Row>

    			<Row className="mb-3">
    				<Form.Group as={Col} controlId="validationCustom09">
      					<Form.Label>Barangay</Form.Label>
      					<Form.Select defaultValue="Choose...">
        					<option>Select</option>
        					<option>...</option>
      					</Form.Select>
    				</Form.Group>
    			</Row>

    			<Row className="mb-3">
	    			<Form.Group as={Col} controlId="validationCustom10">
	  						<Form.Label>Contact Number</Form.Label>
	  						<Form.Control
					            required
					            type="text"
					            placeholder="Middle name"
					        />
					    </Form.Group>
					<Form.Group as={Col} controlId="validationCustom11">
  						<Form.Label>Email Address</Form.Label>
  						<Form.Control
				            required
				            type="text"
				            placeholder="Middle name"
				        />
				    </Form.Group>
				</Row>

				<Row className="mb-3">
					<Form.Group as={Col} controlId="validationCustom12">
      					<Form.Label>Priority Category</Form.Label>
      					<Form.Select defaultValue="Choose...">
        					<option>Select</option>
        					<option>...</option>
      					</Form.Select>
    				</Form.Group>
    			</Row>
    			<Row className="mb-3">
    				<label>Id to bring:</label>
    				<Form.Check 
				        type="checkbox"
				        id={`default-checkbox1`}
				        label={`default ID`}
				      />
				    <Form.Check 
				        type="checkbox"
				        id={`default-checkbox2`}
				        label={`default ID`}
				      />
				    <Form.Check 
				        type="checkbox"
				        id={`default-checkbox3`}
				        label={`default ID`}
				    />
				</Row>
	 				<Form.Group className="mb-3">
	        			<Form.Check
	          				required
	          				label="Agree to terms and conditions"
	         				feedback="You must agree before submitting."
	        			/>
	      			</Form.Group>
     			<Button type="submit">Submit form</Button>
    		</Form>
    		);
		}
	}
export default regForm;