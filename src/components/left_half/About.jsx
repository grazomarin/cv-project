import React, { Component } from 'react';
import editIcon from '../../images/edit.svg';
import '../../styles/About.scss';

export default class About extends Component {
	state = {
		text: '--About Text--',
	};
	render() {
		return (
			<div className="about">
				<div className="category2">About</div>
				<div className="about_about">
					<p>{this.state.text}</p>
				</div>
				<img src={editIcon} alt="" className="edit" />
			</div>
		);
	}
}
