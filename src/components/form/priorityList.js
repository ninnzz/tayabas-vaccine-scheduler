import React, { Component } from 'react';
import {Table} from 'react-bootstrap';

class PriorityList extends Component {
  
  render() {
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Priority #</th>
            <th>Desription</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A1</td>
            <td>priority group A1</td>
          </tr>
          <tr>
            <td>A2</td>
            <td>priority group A2</td>
          </tr>
          <tr>
            <td>A3</td>
            <td colSpan="2">Priority group A3</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default PriorityList;