import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, FormGroup } from 'reactstrap';
import JB from '../JB.png'

export default class Welcome extends React.Component {
  constructor(props) {
    super(props)
  }
    render() {
        return (
            <Container id= 'propose'>
                <Row>
                    <Col xs={{offset: 4 }}><img src={JB} alt="image" style={{ height: `250px`, width:`180px`}}/></Col>
                    <Col className="hola" xs={{offset: 1 }}><h2> Propuesta de seguro </h2></Col>
                </Row>
                <Row>
                    <Col xs={{offset: 1 }}><p> Tu cotización con los datos ingresados es la siguiente: </p></Col>
                    <Col className="hola" xs={{offset: 4 }}><h3>${this.props.quote}.00</h3></Col>
                </Row>
                <Form>
                    <FormGroup check row>
                        <Col className="hola" xs={{ size: 10, offset: 3 }}>
                            <Button color="success"> Contratar </Button>{' '}
                        </Col>
                    </FormGroup>
                    <FormGroup check row>
                        <Col xs={{ size: 10, offset: 3 }}>
                            <Button color="secondary"> Cancelar </Button>{' '}
                        </Col>
                    </FormGroup>
                </Form>
            </Container>
        )
    }
}