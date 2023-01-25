import React, { Component } from 'react';

export default class ExperienceItem extends Component {
	state = {
		jobTitle: this.props.item.jobTitle,
		company: this.props.item.company,
		date: {
			from: this.props.item.date.from,
			to: this.props.item.date.to,
		},
		descritption: this.props.item.descritption,
	};

	render() {
		let { jobTitle, company, date, descritption } = this.state;
		return (
			<li>
				<div className="text_title2">{jobTitle}</div>
				<div className="job-about">
					<span>{company}</span>{' '}
					<span>
						{date.from}-{date.to}
					</span>
				</div>
				<div className="job-description">
					<div className="text_title">Description:</div>
					<div>{descritption}</div>
				</div>
			</li>
		);
	}
}
