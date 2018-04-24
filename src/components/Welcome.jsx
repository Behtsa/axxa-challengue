import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Welcome extends React.Component {
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
                                <Input type="checkbox" id="checkbox2" />{' '}
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
                        <Button> Aceptar </Button>
                    </Col>
                </FormGroup>
            </Form>
            </Container>
        )
    }
}