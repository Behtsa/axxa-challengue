import React, { Component } from 'react';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import InsuranceQuote from './components/InsuranceQuote'
import Propose from './components/Propose'

class App extends Component {
  constructor() {
    super()
    this.state = {
      age: 'zeroTwenty',
      genre: 'female',
      monthlyIncome: 1,
      healthLevel: 1.2,
      specialNeeds: 'no',
      location: 'america',
      days: 364,
      quote: 0
    }

    this.handleAge = this.handleAge.bind(this);
    this.handleGenre = this.handleGenre.bind(this);
    this.handleIncome = this.handleIncome.bind(this);
    this.handleHealthLevel = this.handleHealthLevel.bind(this);
    this.handleNeeds = this.handleNeeds.bind(this);
    this.handleDays = this.handleDays.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleNeeds(need) {
    this.setState({specialNeeds: need});
  }

  handleLocation(location) {
    this.setState({location: location});
  }

  handleDays(days) {
    this.setState({days: days});
  }

  render() {
    // console.log(this.state.quote)
    return (
      <Switch>
        <Route exact path='/Propose' render = {() => {
            return <Propose quote = {this.state.quote} />
          }} />
      <div>
        <InsuranceQuote state = {this.state}
        handleDays = {this.handleDays}
        handleLocation = {this.handleLocation}
        handleNeeds = {this.handleNeeds}
        handleHealthLevel = {this.handleHealthLevel}
        handleIncome = {this.handleIncome}
        handleGenre = {this.handleGenre}
        handleAge = {this.handleAge}
        handleSubmit = {this.handleSubmit} /> 
      </div>
      </Switch>
    );
  }
}

export default withRouter(App);
