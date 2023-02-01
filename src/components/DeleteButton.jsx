import React, { Component } from 'react';
import deleteSrc from '../images/delete.svg';

class DeleteButton extends Component {
	state = {};
	render() {
		return (
			<img
				src={deleteSrc}
				alt=""
				className="delete"
				onClick={this.props.delete}
			/>
		);
	}
}

export default DeleteButton;
