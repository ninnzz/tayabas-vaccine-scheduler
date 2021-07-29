import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import NavHeader from './components/nav/index.js'
import RegForm from './components/form/index.js'

function App() {
  return (
      <Container fluid>
       <Row>
        <NavHeader />
       </Row>
       <Row className="justify-content-lg-center">
        <Col sm={9} md="8"><RegForm/></Col>
       </Row>
      </Container>
  );
}

export default App;
