import React, { Component } from 'react';
import './firebaseConfig';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import InsuranceQuote from './components/InsuranceQuote'
import Propose from './components/Propose'
import Login from './components/LogIn'
import Welcome from './components/Welcome'
import firebase from 'firebase';
import Map from './components/Map';
import Services from './components/Services';

class App extends Component {
  constructor() {
    super()
    // this.database = firebase.database().ref().child('speed');
    this.state = {
      age: 'zeroTwenty',
      genre: 'female',
      monthlyIncome: 1,
      healthLevel: 1.2,
      location: 'america',
      days: 364,
      quote: 0,
      user: {}
      // speed: 30
    }

    this.handleAge = this.handleAge.bind(this);
    this.handleGenre = this.handleGenre.bind(this);
    this.handleIncome = this.handleIncome.bind(this);
    this.handleHealthLevel = this.handleHealthLevel.bind(this);
    this.handleDays = this.handleDays.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

    this.authListener();
    }

  handleSubmit(finalQuote) {
    this.setState({
      quote: finalQuote
    })
    const location = {
    pathname: '/Propose',
    }

    this.props.history.push(location)
  }

  handleAge(age) {
    this.setState({age: age});
  }

  handleGenre(genre) {
    this.setState({genre: genre});
  }

  handleIncome(income) {
    this.setState({monthlyIncome: income});
  }

  handleHealthLevel(health) {
    this.setState({healthLevel: health});
  }


  handleLocation(location) {
    this.setState({location: location});
  }

  handleDays(days) {
    this.setState({days: days});
  }

  authListener() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if(user) {
        this.setState({ user });
      } else {
        this.setState ({ user: null });
      }
    })
  }

  render() {
    return (
      <Switch>
        <Route exact path='/Propose' render = {() => {
            return <Propose quote = {this.state.quote} />
          }} />
      <div>

        <Map locationLat={-34.397} locationLong={150.644}/>
        {this.state.user ? (<Welcome />) : (<Login />)}
        {/*<InsuranceQuote state = {this.state}
        // handleDays = {this.handleDays}
        // handleLocation = {this.handleLocation}
        // handleHealthLevel = {this.handleHealthLevel}
        // handleIncome = {this.handleIncome}
        // handleGenre = {this.handleGenre}
        // handleAge = {this.handleAge}
        // handleSubmit = {this.handleSubmit} />*/}
        <Services />
      </div>
      </Switch>
    );
  }
}

export default withRouter(App);
