import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import JB from '../JB.png';
import Cotiza from '../images/cotiza.png';
import Serviceees from '../images/servicios.png';
import SOS from '../images/sos.png';
import Agente from '../images/agente.png';
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
          <Col className="holaa" xs={{offset: 1 }}><img className='img-responsive' src={Cotiza} style={{ height: `100px`, width:`100px`}} alt="image"/></Col>
          <Col className="holaa" xs={{offset: 2 }}><img className='img-responsive' src={Serviceees} style={{ height: `120px`, width:`120px`}} alt="image"/></Col>
        </Row>
        <Row>
          <Col className="holaa" xs={{offset: 1 }}><img className='img-responsive' src={SOS} style={{ height: `120px`, width:`120px`}} alt="image"/></Col>
          <Col className="holaa" xs={{offset: 2 }}><img className='img-responsive' src={Agente} style={{ height: `120px`, width:`120px`}} alt="image"/></Col>
        </Row>
      </Container>
    );
  }
}
