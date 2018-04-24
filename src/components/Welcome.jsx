import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../firebaseConfig';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import firebase from 'firebase';
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
                <Row>
                    <Col xs={{offset: 5 }}><img src="https://dummyimage.com/100x100/000/fff" alt="image"/></Col>
                    <Col className="hola" xs={{offset: 2 }}><h2> Bienvenido a la app </h2></Col>
                </Row>
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
                    <Col xs={{ size: 10 }}>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" id="checkbox2" />{' '}
                                S.O.S
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col xs={{ size: 10 }}>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" id="checkbox2" />{' '}
                                Ver agentes
                            </Label>
                        </FormGroup>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col xs={{ size: 10}}>
                        <Button onClick = {this.logout}> LogOut </Button>
                    </Col>
                </FormGroup>
            </Form>
            </Container>
        )
    }
}

export default withRouter(Welcome);