import React, { Component } from 'react';
import '../../styles/Experience.scss';
import uniqid from 'uniqid';
import EditButton from '../EditButton';
import AddButton from '../AddButton';

class ExperienceItem extends Component {
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

class Experience extends Component {
	state = {
		experience: [
			{
				jobTitle: 'Job Title',
				company: 'Company',
				date: {
					from: 'from',
					to: 'to',
				},
				descritption: 'description',
				id: uniqid(),
			},
		],
	};

	render() {
		return (
			<div className="experience">
				<div className="category2">Experience</div>
				<div className="experience-details">
					<ul>
						{this.state.experience.map((item) => {
							return <ExperienceItem item={item} key={item.id} />;
						})}
					</ul>
				</div>
				<div className="actionCont">
					<AddButton />
					<EditButton active={this.state.active} />
				</div>
			</div>
		);
	}
}

export default Experience;
