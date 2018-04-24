import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import InsuranceQuote from './components/InsuranceQuote';
import './firebaseConfig';
import firebase from 'firebase';

class App extends Component {
  constructor() {
    super() 
    this.database = firebase.database().ref().child('speed');

    this.state = {
      speed: 30
    }
  }

  componentDidMount() {
    this.database.on('value', snap => {
      this.setState({
        speed: snap.val()
      });
    });
  }

  render() {
    return (
      <div>
        <InsuranceQuote />
      </div>
    )
  }
}


export default App;
