import React, { Component } from 'react';
import '../styles/Education.scss';

export default class Education extends Component {
	render() {
		return (
			<div className="education">
				<div className="category2">Education</div>
				<div className="education-education">
					<ul>
						<li>
							<div className="major">CSE Bachelor's degree</div>
							<div className="university">
								<span>2023-2027</span>{' '}
								<span>McGill university</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
