import React, { Component } from 'react';
import homeIcon from '../../images/home.svg';
import mailIcon from '../../images/mail.svg';
import phoneIcon from '../../images/phone.svg';
import siteIcon from '../../images/site.svg';

import '../../styles/Details.scss';
import EditButton from '../EditButton';

export default class Details extends Component {
	state = {
		address: '--address--',
		phone: '--phone--',
		email: '--email--',
		website: '--website--',
	};

	render() {
		let { address, phone, email, website } = this.state;
		return (
			<div className="details">
				<div className="category">Contact</div>
				<div className="details-details">
					<div className="detail">
						<img src={homeIcon} alt="" className="icon" />
						<div className="text_title">
							<span>Home Address:</span>
						</div>
						<div className="content">{address}</div>
					</div>
					<div className="detail">
						<img src={phoneIcon} alt="" className="icon" />
						<div className="text_title">
							<span>Phone Number:</span>
						</div>
						<div className="content">{phone}</div>
					</div>
					<div className="detail">
						<img src={mailIcon} alt="" className="icon" />
						<div className="text_title">
							<span>Email:</span>
						</div>
						<div className="content">{email}</div>
					</div>
					<div className="detail">
						<img src={siteIcon} alt="" className="icon" />
						<div className="text_title">
							<span>Site:</span>
						</div>
						<div className="content">
							<a href={'http://' + website} target="_blank">
								{website}
							</a>
						</div>
					</div>
				</div>
				<div className="actionCont">
					<EditButton active={this.state.active} />
				</div>
			</div>
		);
	}
}
