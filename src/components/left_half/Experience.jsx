import React, { Component } from 'react';
import '../../styles/Experience.scss';
import editIcon from '../../images/edit.svg';
import uniqid from 'uniqid';
import ExperienceItem from './ExperienceItem';

class Experience extends Component {
	state = {
		experience: [
			{
				jobTitle: '--Job Title--',
				company: '--Company--',
				date: {
					from: 'from',
					to: 'to',
				},
				descritption: '--description--',
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
				<img src={editIcon} alt="" className="edit" />
			</div>
		);
	}
}

export default Experience;
