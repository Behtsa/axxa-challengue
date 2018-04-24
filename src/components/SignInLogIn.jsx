import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, FormGroup } from 'reactstrap';

export default class SignInLogIn extends React.Component {
    render() {
      return (
        <Container>
            <Form>
                <FormGroup check row>
                    <Col className="hola" xs={{ size: 10, offset: 4 }}>
                        <Button> Ingresa </Button>
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col xs={{ size: 10, offset: 4 }}>
                        <Button> Regístrate </Button>
                    </Col>
                </FormGroup>
            </Form>
        </Container>
      );
    }
}