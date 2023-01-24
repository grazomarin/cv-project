import React, { Component } from 'react';
import '../styles/Title.scss';

export default class Title extends Component {
	render() {
		return (
			<div className="title">
				<div className="title_name">Joe Shmo</div>
				<div className="title_title">Front-End React developer</div>
			</div>
		);
	}
}
