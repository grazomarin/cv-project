import React, { Component } from 'react';
import home from '../images/home.svg';
import mail from '../images/mail.svg';
import phone from '../images/phone.svg';
import site from '../images/site.svg';
import '../styles/Details.scss';

export default class Details extends Component {
	state = {};
	render() {
		return (
			<div className="details">
				<div className="category">Contact</div>
				<div className="details-details">
					<div className="detail">
						<img src={home} alt="" className="icon" />
						<div className="text_title">
							<span>Home Address:</span>
						</div>
						<div className="content">Somewhere</div>
					</div>
					<div className="detail">
						<img src={phone} alt="" className="icon" />
						<div className="text_title">
							<span>Phone Number:</span>
						</div>
						<div className="content">+21 --- --- -- --</div>
					</div>
					<div className="detail">
						<img src={mail} alt="" className="icon" />
						<div className="text_title">
							<span>Email:</span>
						</div>
						<div className="content">dontEmailMe@gmail.com</div>
					</div>
					<div className="detail">
						<img src={site} alt="" className="icon" />
						<div className="text_title">
							<span>Site:</span>
						</div>
						<div className="content">
							<a
								href="https://github.com/grazomarin"
								target="_blank"
							>
								https://github.com/grazomarin
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
