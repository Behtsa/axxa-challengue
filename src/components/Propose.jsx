import React, { Component } from 'react';

class Propose extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		console.log(this.props.quote)
		return(
			<div>{this.props.quote}</div>
			)
	}
}

export default Propose;