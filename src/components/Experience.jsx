import React, { Component } from 'react';
import '../styles/Experience.scss';

class Experience extends Component {
	render() {
		return (
			<div className="experience">
				<div className="category2">Experience</div>
				<div className="experience-details">
					<ul>
						<li>
							<div className="text_title2">
								Front-End Web Developer
							</div>
							<div className="job-about">
								<span>Google</span> <span>2018-2019</span>
							</div>
							<div className="job-description">
								<div className="text_title">Description:</div>
								<ul>
									<li>worked in agile environment</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Experience;
