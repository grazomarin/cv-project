import React, { Component } from 'react';
import '../styles/General.scss';
import placeholder from '../images/placeholder.jpg';
import home from '../images/home.svg';
import mail from '../images/mail.svg';
import phone from '../images/phone.svg';
import site from '../images/site.svg';

export default class General extends Component {
	render() {
		return (
			<div className="general">
				<img src={placeholder} alt="" className="profilePic" />
				<div className="general-details">
					<div className="category">Contact</div>
					<div>
						<img src={home} alt="" className="icon" />
						<span>Somewhere</span>
					</div>
					<div>
						<img src={phone} alt="" className="icon" />
						<span>+21 --- --- -- --</span>
					</div>
					<div>
						<img src={mail} alt="" className="icon" />
						<span>dontEmailMe@gmail.com</span>
					</div>
					<div>
						<img src={site} alt="" className="icon" />
						<a href="https://github.com/grazomarin" target="_blank">
							https://github.com/grazomarin
						</a>
					</div>
				</div>
				<div className="skills">
					<div className="category">Skills</div>
					<ul>
						<li>HTML</li>
						<li>CSS</li>
						<li>Sass</li>
						<li>JavaScript</li>
						<li>React</li>
					</ul>
				</div>
				<div className="languages">
					<div className="category">Languages</div>
					<div className="languages-language">
						<div className="title">
							<span>English</span> <span>B1</span>
						</div>
						<input type="range" min="1" max="6" value="3" />
					</div>
					<div className="languages-language">
						<div className="title">
							<span>French</span> <span>B1</span>
						</div>
						<input type="range" min="1" max="6" value="3" />
					</div>
					<div className="languages-language">
						<div className="title">
							<span>Azerbaijani</span> <span>B1</span>
						</div>
						<input type="range" min="1" max="6" value="3" />
					</div>
				</div>
			</div>
		);
	}
}
