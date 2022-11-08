import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/common/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import MessageBox from './components/CommentBox/CommentBox';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Comment from './components/Comment.js/Comment';
import CommentHistory from './components/CommentHistory/CommentHistory';

const seeBorders = false;


function App() {

  const [comments, setComments] = useState(['A']);

  const sendComment = (comment: string)=>{
    setComments([...comments, comment]);
  }

  useEffect(()=>{
  })

  return (
    <div>
      <Header />
      <Container >
        <Row style={{height: '2vh'}}>&nbsp;</Row>
        <Row >
          <Col id="comment-history" xs={8} md={9} style={{borderStyle: seeBorders ? 'solid' : ''}}>
            <Card style={{height:'69vh'}}>
            <Card.Body className='overflow-auto'>
              <CommentHistory comments={comments}/> 
            </Card.Body>
            </Card>
            
          </Col>
          <Col id="user-list" xs={4} md={3} style={{borderStyle: seeBorders ? 'solid' : ''}}>
            <Card style={{height:'69vh'}}>
              <Card.Body>
                <Row>User</Row>
                <Row>User</Row> 
                <Row>User</Row> 
                <Row>User</Row>   
              </Card.Body>
            </Card>
          </Col>
       </Row>
       <Row>
        <Col xs={8} md={9} style={{borderStyle: seeBorders ? 'solid' : '', borderRadius: '2px'}}>
          <MessageBox clickSend={sendComment} />
        </Col>
        <Col xs={4} md={3} style={{borderStyle: seeBorders ? 'solid' : ''}}>
          &nbsp;
        </Col>
       </Row>

      </Container>
    </div>
    
  );
}


export default App;
