import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import JB from '../JB.png';
import Ambulancia from '../images/ambulancia.png';
import Horas from '../images/24hrs.png';
import Psicologo from '../images/psico.png';
import Hospital from '../images/hospital.png';
import Hamburger from './HamburgerMenu';

export default class Services extends React.Component {
  render() {
    return (
      <Container>
        <Hamburger />
        <Row>
          <Col xs={{offset: 3 }}><img className='img-responsive imgJB' src={JB} style={{ height: `200px`, width:`200px`}} alt="image"/></Col>
          <Col className="holaa" xs={{offset: 3 }}><h1> Servicios </h1></Col>
        </Row>
        <Row>
          <Col className="holaa" xs={{offset: 1 }}>
            <img className='img-responsive' src={Ambulancia} style={{ height: `120px`, width:`120px`}} alt="image"/>
            <p> Ambulancia </p>
          </Col>
          <Col className="holaa" xs={{offset: 2 }}>
            <img className='img-responsive' src={Horas} style={{ height: `120px`, width:`120px`}} alt="image"/>
            <p> Horas </p>
          </Col>
        </Row>
        <Row>
          <Col className="holaa" xs={{offset: 1 }}>
            <img className='img-responsive' src={Hospital} style={{ height: `120px`, width:`120px`}} alt="image"/>
          </Col>
          <Col className="holaa" xs={{offset: 2 }}>
            <img className='img-responsive' src={Psicologo} style={{ height: `120px`, width:`120px`}} alt="image"/>
          </Col>
        </Row>
      </Container>
    );
  }
}
