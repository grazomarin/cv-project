import React, { Component } from 'react';
import editIcon from '../../images/edit.svg';
import '../../styles/Title.scss';

export default class Title extends Component {
	state = {
		name: '--Name--',
		title: '--Title--',
	};

	render() {
		return (
			<div className="title">
				<div className="title_name">{this.state.name}</div>
				<div className="title_title">{this.state.title}</div>
				<img src={editIcon} alt="" className="edit" />
			</div>
		);
	}
}
