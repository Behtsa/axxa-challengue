import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, FormGroup } from 'reactstrap';
import { Route, Switch, Link, withRouter } from 'react-router-dom';


class SignInLogIn extends React.Component {
    constructor() {
        super();

        this.login = this.login.bind(this);
    }

    login(e) {
        e.preventDefault();
        const log = {
        pathname: '/Propose',
        }

        this.props.history.push(log)
    }

    render() {
      return (
        <Container>
            <Form>
                <FormGroup check row>
                    <Col className="hola" xs={{ size: 10, offset: 4 }}>
                        <Button onClick={this.login}> Ingresa </Button>
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

export default withRouter(SignInLogIn)