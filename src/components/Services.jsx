import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Services extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={{offset: 5 }}><img src="https://dummyimage.com/100x100/000/fff" alt="image"/></Col>
          <Col className="hola" xs={{offset: 4 }}><h1> Servicios </h1></Col>
        </Row>
        <Row>
          <Col className="hola" xs={{offset: 2 }}><img src="https://dummyimage.com/100x100/000/fff" alt="image"/></Col>
          <Col className="hola" xs={{offset: 2 }}><img src="https://dummyimage.com/100x100/000/fff" alt="image"/></Col>
        </Row>
        <Row>
          <Col className="hola" xs={{offset: 2 }}><img src="https://dummyimage.com/100x100/000/fff" alt="image"/></Col>
          <Col className="hola" xs={{offset: 2 }}><img src="https://dummyimage.com/100x100/000/fff" alt="image"/></Col>
        </Row>
        <Row>
          <Col className="hola" xs={{offset: 5 }}><img src="https://dummyimage.com/100x100/000/fff" alt="image"/></Col>
          
        </Row>
      </Container>
    );
  }
}
