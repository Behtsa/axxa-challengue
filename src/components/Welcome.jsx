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
            <Container id='welcome'>
                <Hamburger />
                <Row>
                    <Col xs={{offset: 3 }}><img className='img-responsive imgJB' src={JB} style={{ height: `200px`, width:`200px`}} alt="image"/></Col>
                    <Col className="hola" xs={{offset: 2 }}><h2> Bienvenido a Safeguard </h2></Col>
                </Row>
                <Row>
                    <Col className="holaa" xs={{offset: 1 }}>
                        <img className='img-responsive' src={Cotiza} style={{ height: `120px`, width:`120px`}} alt="image"/>
                    </Col>
                </Row>
            <Form>
                <FormGroup row>
                    <Col xs={{ size: 8 }}>
                        <FormGroup check>
                            <Label check>
                            <Button className='btn btn-success' onClick={this.handleClick}>Cotiza tu seguro</Button>
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col className="holaa" xs={{offset: 2 }}>
                        <img className='img-responsive' src={Serviceees} style={{ height: `120px`, width:`120px`}} alt="image"/>
                        <p> Servicios </p> 
                    </Col>

                <Row>
                    
                    <Col className="holaa" xs={{offset: 2 }}>
                        <img className='img-responsive' src={Agente} style={{ height: `120px`, width:`120px`}} alt="image"/>
                        <p> Ver agentes </p>
                    </Col>
                </Row>
                
                </FormGroup>
                <FormGroup id='logOut'>
                     
                      <Button className='btn btn-secondary' onClick = {this.logout}> LogOut </Button>
                     
                 </FormGroup>
                </Form>
            </Container>
        )
    }
}

export default withRouter(Welcome);