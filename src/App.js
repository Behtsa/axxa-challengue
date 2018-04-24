import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import InsuranceQuote from './components/InsuranceQuote';

class App extends Component {
  render() {
    return (
      <div>
        <InsuranceQuote />
      </div>
    );
  }
}

export default App;
