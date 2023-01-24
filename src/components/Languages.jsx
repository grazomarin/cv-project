import React, { Component } from 'react';
import '../styles/Languages.scss';

export default class Languages extends Component {
	render() {
		return (
			<div className="languages">
				<div className="category">Languages</div>
				<div className="languages-cont">
					<div className="language">
						<div className="language_title">
							<span>English</span> <span>B1</span>
						</div>
						<input type="range" min="1" max="6" value="3" />
					</div>
					<div className="language">
						<div className="language_title">
							<span>French</span> <span>B1</span>
						</div>
						<input type="range" min="1" max="6" value="3" />
					</div>
					<div className="language">
						<div className="language_title">
							<span>Azerbaijani</span> <span>B1</span>
						</div>
						<input type="range" min="1" max="6" value="3" />
					</div>
				</div>
			</div>
		);
	}
}
