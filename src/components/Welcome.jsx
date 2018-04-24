import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../firebaseConfig';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import firebase from 'firebase';
import JB from '../JB.png';
import Cotiza from '../images/cotiza.png';
import Serviceees from '../images/servicios.png';
import SOS from '../images/sos.png';
import Agente from '../images/agente.png';
import Axa from '../images/logoaxa.png';
import Hamburger from './HamburgerMenu';
import Insurance from './InsuranceQuote'



class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const location = {
        pathname: '/Cotizacion',
        }

        this.props.history.push(location)
    }

    logout() {
        firebase.auth().signOut();
    }

    render() {
        return (

            <Container>
                <Hamburger />
                <Row>
                    <Col xs={{offset: 3 }}><img className='img-responsive imgJB' src={JB} style={{ height: `200px`, width:`200px`}} alt="image"/></Col>
                    <Col className="hola" xs={{offset: 2 }}><h2> Bienvenido a la app </h2></Col>
            </Row>
                <Row>
                    <Col className="holaa" xs={{offset: 1 }}>
                        <img className='img-responsive' src={Cotiza} style={{ height: `120px`, width:`120px`}} alt="image"/>
                        <p> Cotiza tu seguro </p>

            <Form>
                <FormGroup row>
                    <Col xs={{ size: 10 }}>
                        <FormGroup check>
                            <Label check>
                            <Input onClick={this.handleClick}/>{' '}
                                Cotiza tu seguro
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col xs={{ size: 10 }}>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" id="checkbox2" />{' '}
                                Servicios
                            </Label>
                      </FormGroup>
                    </Col>
                    <Col className="holaa" xs={{offset: 2 }}>
                        <img className='img-responsive' src={Serviceees} style={{ height: `120px`, width:`120px`}} alt="image"/>
                        <p> Servicios </p> 
                    </Col>
                </Row>
                <Row>
                    <Col className="holaa" xs={{offset: 1 }}>
                        <img className='img-responsive' src={SOS} style={{ height: `120px`, width:`120px`}} alt="image"/>
                        <p> S.O.S </p>
                    </Col>
                    <Col className="holaa" xs={{offset: 2 }}>
                        <img className='img-responsive' src={Agente} style={{ height: `120px`, width:`120px`}} alt="image"/>
                        <p> Ver agentes </p>
                    </Col>
                </Row>
                <Row>
                    <Col className="holaa" xs={{offset: 10 }}><img className='img-responsive' src={Axa} style={{ height: `50px`, width:`50px`}} alt="image"/></Col>
                </Row>
            </Container>
        )
    }
}

export default withRouter(Welcome);