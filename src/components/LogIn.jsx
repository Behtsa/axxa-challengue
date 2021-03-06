import React, { Component } from 'react';
import '../firebaseConfig';
import firebase from 'firebase';
import JB from '../JB.png';
import { Col, Row } from 'reactstrap';


class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        alert('Debes registrarte');
      });
  }

  signup(e){
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
      <div id='login' className="col-md-6 container">
      <Row>
        <Col xs={{offset: 3 }}><img className='img-responsive imgJB' src={JB} style={{ height: `250px`, width:`180px`}}/></Col>
      </Row>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Correo</label>
            <input  value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Contraseña</label>
            <input  value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" onClick={this.login} class="btn btn-primary center">Log In</button>
          <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success center">SignUp</button>
        </form>
      
      </div>
    );
  }
}
export default Login;
