import React, { Component } from 'react';
import editIcon from '../images/edit.svg';

export default class EditButton extends Component {
	render() {
		return (
			<img
				src={editIcon}
				alt=""
				className="edit"
				onClick={this.props.fn}
			/>
		);
	}
}
