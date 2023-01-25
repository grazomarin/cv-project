import React, { Component } from 'react';
import EducationItem from './EducationItem';
import '../../styles/Education.scss';
import editIcon from '../../images/edit.svg';
import uniqid from 'uniqid';

export default class Education extends Component {
	state = {
		items: [
			{
				degree: '--Degree--',
				university: '--University--',
				date: {
					from: 'from',
					to: 'to',
				},
				id: uniqid(),
			},
		],
	};
	render() {
		return (
			<div className="education">
				<div className="category2">Education</div>
				<div className="education-education">
					<ul>
						{this.state.items.map((item) => {
							return <EducationItem item={item} key={item.id} />;
						})}
					</ul>
				</div>
				<img src={editIcon} alt="" className="edit" />
			</div>
		);
	}
}
