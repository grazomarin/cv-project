import React, { Component } from 'react';

export default class EducationItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			degree: this.props.item.degree,
			university: this.props.item.university,
			date: {
				from: this.props.item.date.from,
				to: this.props.item.date.to,
			},
		};
	}

	render() {
		let { degree, university, date } = this.state;
		return (
			<li>
				<div className="text_title2">{degree}</div>
				<div className="university">
					<span>
						{date.from}-{date.to}
					</span>{' '}
					<span>{university}</span>
				</div>
			</li>
		);
	}
}
