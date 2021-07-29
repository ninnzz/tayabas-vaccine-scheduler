import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
//File Imports
import './App.css';
import regForm from './components/regForm/index.js';

class App extends Component {
  render() {
    return (
      <Container fluid>
      <Row>
        <Col>hi sample</Col>
        <Col><regForm /></Col>
      </Row>
    </Container>
    );
  }
}
export default App;