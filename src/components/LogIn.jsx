import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class LogIn extends React.Component {
    render() {
      return (
        <Container>
          <Row>
            <Col xs={{offset: 5 }}><img src="https://dummyimage.com/100x100/000/fff" alt="image"/></Col>
            <Col className="hola" xs={{offset: 2 }}><h1> Ingresa a la app </h1></Col>
          </Row>
          <Form inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Col className="hola" xs={{offset: 4 }}>
                    <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
                </Col>
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Col className="hola" xs={{offset: 4 }}>
                    <Label for="examplePassword" className="mr-sm-2">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="*******" />
                </Col>
            </FormGroup>
            <FormGroup check row>
                <Col xs={{ size: 10, offset: 4 }}>
                    <Button>Submit</Button>
                </Col>
            </FormGroup>
          </Form>
        </Container>
      );
    }
}