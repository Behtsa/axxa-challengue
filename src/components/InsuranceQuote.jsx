import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

class InsuranceQuote extends Component {
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
		this.quotation = this.quotation.bind(this);

	}

	/*update State methods in form*/

	quotation() {
		const baseCost = 3000;
		const age = this.validateAge(this.state.age);
		const genre = this.validateGenre(this.state.genre);
		const income = this.validateSocioeconomicStatus(this.state.monthlyIncome);
		const health = this.validateHealthLevel(this.state.healthLevel)
		const needs = this.validateSpecialNeeds(this.state.specialNeeds);
		const location = this.valiadateLocation(this.state.location);
		const days = parseInt(this.state.days);
		const finalQuote = parseInt(((baseCost * age * genre * income * health * needs * location * days) * 1.20));
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

	validateSpecialNeeds(need) {
		switch(need) {
			case 'cajaGrande':
			return 1.3;
			case 'cajaMed':
			return 1.2;
			case 'no':
			return 1;
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

	handleSubmit(e) {
		e.preventDefault();
		this.setState({
			quote: this.quotation()
		})
	}

	handleAge(event) {
		this.setState({age: event.target.value});
	}

	handleGenre(event) {
		this.setState({genre: event.target.value});
	}

	handleIncome(event) {
		this.setState({monthlyIncome: event.target.value});
	}

	handleHealthLevel(event) {
		this.setState({healthLevel: event.target.value});
	}

	handleNeeds(event) {
		this.setState({specialNeeds: event.target.value});
	}

	handleLocation(event) {
		this.setState({location: event.target.value});
	}

	handleDays(event) {
		this.setState({days: event.target.value});
	}

	

	render() {
		console.log(this.state)
		return(
			<form id='form' className='container' onSubmit={this.handleSubmit}>
				<div className='margin'>
					<div className='form-group'>
						<label>Edad:</label>
						<select className="custom-select col-md-12" value={this.state.age} onChange={this.handleAge}>
	          	<option className='col-md-12' value="zeroTwenty">0-20</option>
	          	<option value="twentyOneThirty">21-30</option>
	          	<option value="thirtyOneForty">31-40</option>
	          	<option value="fortyOneNinety">41-99</option>
	        	</select>
					</div>
					<div className='form-group'>
						<label>Genero:</label>
						<select className="custom-select" value={this.state.genre} onChange={this.handleGenre}>
	          	<option value="female">Mujer</option>
	          	<option value="male">Hombre</option>
	        	</select>
	      	</div>
	      	<div className='form-group'>
						<label>Ingreso mensual:</label>
						<select className="custom-select" value={this.state.monthlyIncome} onChange={this.handleIncome}>
	          	<option value="1">menos de 200 mil pesos al mes</option>
	          	<option value="2">201 – 300 mil pesos al mes</option>
	          	<option value="3">301 – 400 mil pesos al mes</option>
	          	<option value="4">401 mil pesos o más al mes</option>
	        	</select>
        	</div>
	      	<div className='form-group'>
						<label>Nivel de salud:</label>
						<select className="custom-select" value={this.state.healthLevel} onChange={this.handleHealthLevel}>
	          	<option value="1">0-50</option>
	          	<option value="2">51-75</option>
	          	<option value="3">76-100</option>
	        	</select>
	      	</div>
	      	<div className='form-group'>
						<label>Necesidades especiales:</label>
						<select className="custom-select" value={this.state.specialNeeds} onChange={this.handleNeeds}>
            	<option value="cajaGrande">Caja grande</option>
            	<option value="cajaMed">Caja mediana</option>
            	<option value="CajaCh">Caja chica</option>
            	<option value="no">Sin necesidad especial</option>
          	</select>
		  		<div className='form-group'>
						<label> Destino </label>
						<select className="custom-select" value={this.state.location} onChange={this.handleLocation}>
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
					<input className='form-control' type='text' name='duration' placeholder='Dias' value={this.state.days} onChange={this.handleDays}/>
				</div>
				<input type="submit" value="Cotizar" />
			</div>
		</form>
   )
	}
}

export default InsuranceQuote;