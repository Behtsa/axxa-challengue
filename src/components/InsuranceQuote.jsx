import React, { Component } from 'react';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import Propose from './Propose'


class InsuranceQuote extends Component {
	constructor(props) {
		super(props);

		this.handleAge1 = this.handleAge1.bind(this);
    this.handleGenre1 = this.handleGenre1.bind(this);
    this.handleIncome1 = this.handleIncome1.bind(this);
    this.handleHealthLevel1 = this.handleHealthLevel1.bind(this);
    this.handleDays1 = this.handleDays1.bind(this);
    this.handleLocation1 = this.handleLocation1.bind(this);
    this.handleSubmit1 = this.handleSubmit1.bind(this);
    this.quotation1 = this.quotation1.bind(this);
	}

	quotation1() {
    const baseCost = 3000;
    const age = this.validateAge(this.props.state.age);
    const genre = this.validateGenre(this.props.state.genre);
    const income = this.validateSocioeconomicStatus(this.props.state.monthlyIncome);
    const health = this.validateHealthLevel(this.props.state.healthLevel)
    const location = this.valiadateLocation(this.props.state.location);
    const days = parseInt(this.props.state.days);
    const finalQuote = parseInt(((baseCost * age * genre * income * health * location * days) * 1.20));
    return finalQuote
  }

  valiadateLocation(location) {
    switch(location) {
      case 'asia':
      return 1.1;
      case 'africa':
      return 1.3;
      case 'europa':
      return 1.1;
      case 'oceania':
      return 1.1;
      default:
      return 1.1;

    }
  }

  validateHealthLevel(health) {
    switch(health) {
      case '2':
      return 1.1;
      case '3':
      return 1;
      default:
      return 1.2;

    }
  }

  validateSocioeconomicStatus(income) {
    switch(income) {
      case '2':
      return 1.2;
      case '3':
      return 1.3;
      case '4':
      return 1.4
      default:
      return 1;

    }
  }

  validateGenre(genre) {
    if(genre === 'female') {
      return 1.2
    } else{
      return 1.1
    }
  }

  validateAge(age) {
    switch(age) {
      case 'twentyOneThirty':
      return 1.2;
      case 'thirtyOneForty':
      return 1.3;
      case 'fortyOneNinety':
      return 1.4
      default:
      return 1.1;

    }
  }

	  handleSubmit1(e) {
    e.preventDefault();

    this.props.handleSubmit(this.quotation1())
  }

  handleAge1(event) {
    this.props.handleAge(event.target.value);
  }

  handleGenre1(event) {
    this.props.handleGenre(event.target.value);
  }

  handleIncome1(event) {
    this.props.handleIncome(event.target.value);
  }

  handleHealthLevel1(event) {
    this.props.handleHealthLevel(event.target.value);
  }

  handleLocation1(event) {
    this.props.handleLocation(event.target.value);
  }

  handleDays1(event) {
    this.props.handleDays(event.target.value);
  }
	

	render() {
    console.log(this.props.state)
		
		return(
			<div>
			<form id='form' className='container' onSubmit={this.handleSubmit1}>
				<div className='margin'>
					<div className='form-group'>
						<label>Edad:</label>
						<select className="custom-select col-md-12" value={this.props.state.age} onChange={this.handleAge1}>
	          	<option value="zeroTwenty">0-20</option>
	          	<option value="twentyOneThirty">21-30</option>
	          	<option value="thirtyOneForty">31-40</option>
	          	<option value="fortyOneNinety">41-99</option>
	        	</select>
					</div>
					<div className='form-group'>
						<label>Genero:</label>
						<select className="custom-select" value={this.props.state.genre} onChange={this.handleGenre1}>
	          	<option value="female">Mujer</option>
	          	<option value="male">Hombre</option>
	        	</select>
	      	</div>
	      	<div className='form-group'>
						<label>Ingreso mensual:</label>
						<select className="custom-select" value={this.props.state.monthlyIncome} onChange={this.handleIncome1}>
	          	<option value="1">menos de 200 mil pesos al mes</option>
	          	<option value="2">201 – 300 mil pesos al mes</option>
	          	<option value="3">301 – 400 mil pesos al mes</option>
	          	<option value="4">401 mil pesos o más al mes</option>
	        	</select>
        	</div>
	      	<div className='form-group'>
						<label>Nivel de salud:</label>
						<select className="custom-select" value={this.props.state.healthLevel} onChange={this.handleHealthLevel1}>
	          	<option value="1">0-50</option>
	          	<option value="2">51-75</option>
	          	<option value="3">76-100</option>
	        	</select>
	      	</div>
		  		<div className='form-group'>
						<label> Destino </label>
						<select className="custom-select" value={this.props.state.location} onChange={this.handleLocation1}>
            	<option value="africa">Africa</option>
            	<option value="america">America</option>
            	<option value="asia">Asia</option>
            	<option value="europa">Europa</option>
            	<option value="oceania">Oceania</option>
          	</select>
		  		</div>
        </div>
	      <div className='form-group'>
					<label>Duracion del seguro(dias):</label>
					<input className='form-control' type='text' name='duration' placeholder='Dias' value={this.props.state.days} onChange={this.handleDays1}/>
				</div>
				<input type="submit" value="Cotizar" />
		</form>
		</div>
   )
	}
}

export default withRouter(InsuranceQuote);