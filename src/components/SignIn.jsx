import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class SignIn extends React.Component {
  render() {
    return (
        <Container>
          <Row>
            <Col xs={{offset: 5 }}><img src="https://dummyimage.com/100x100/000/fff" alt="image"/></Col>
            <Col className="hola" xs={{offset: 4 }}><h1> Registro </h1></Col>
          </Row>
      <Form>
        <FormGroup>
          <Label for="exampleSelect">Edad</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>0-20</option>
            <option>21-30</option>
            <option>31-40</option>
            <option>41-99</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Género</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>Hombre</option>
            <option>Mujer</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Nivel socioeconómico</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option> menos de 200 mil pesos al mes </option>
            <option> 201-300 mil pesos al mes </option>
            <option> 301-400 mil pesos al mes </option>
            <option> 401 mil pesos o más al mes </option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Nivel de salud</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option> 0-50 </option>
            <option> 51-75 </option>
            <option> 76-100 </option>
          </Input>
        </FormGroup>
        <FormGroup check row>
          <Col xs={{ size: 10}}>
            <Button> Registrarse </Button>
          </Col>
        </FormGroup>
      </Form>
      </Container>
    );
  }
}