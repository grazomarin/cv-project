import React, { Component } from 'react';
import add from '../images/add.svg';

class AddButton extends Component {
	state = {};
	render() {
		return <img className="add" src={add} alt="" />;
	}
}

export default AddButton;
