import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/common/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import MessageBox from './components/MessageBox/MessageBox';
import { Col, Container, Row } from 'react-bootstrap';


function App() {
  return (
    <div>
      <Header />
      <Container fluid>
      <Row style={{marginBottom: '500px'}}>&nbsp;</Row>
      <Row className="d-flex flex-row justify-content-center"  >
        <Col xs={3} md={3}  className='d-flex flex-column align-items-center p-5' >A</Col>
        <Col xs={3} md={5}  className='d-flex flex-column align-items-center p-5' style={{borderStyle: 'solid'}}>B</Col>
        <Col xs={3} md={3}  className='d-flex flex-column align-items-center p-5'>C</Col>
      </Row>
      <Row>&nbsp;</Row>
      <Row id="message-box" className="d-flex flex-row justify-content-center" >
        <Col xs={3} md={3}  className='d-flex flex-column align-items-center p-5' ></Col>
        <Col xs={3} md={5}  className='d-flex flex-column align-items-center p-5' style={{borderStyle: 'solid'}}>B</Col>
        <Col xs={3} md={3}  className='d-flex flex-column align-items-center p-5'></Col>
       </Row>
      </Container>
    </div>
    
  );
}

export default App;
