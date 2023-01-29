import React, { Component } from 'react';
import add from '../images/add.svg';

class AddButton extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<img
				className="add"
				onClick={this.props.func?.createItem}
				src={add}
				alt=""
			/>
		);
	}
}

export default AddButton;
