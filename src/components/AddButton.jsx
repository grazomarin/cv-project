import React, { Component } from 'react';
import add from '../images/add.svg';

class AddButton extends Component {
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
