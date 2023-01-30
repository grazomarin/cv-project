import React, { Component } from 'react';
import homeIcon from '../../images/home.svg';
import mailIcon from '../../images/mail.svg';
import phoneIcon from '../../images/phone.svg';
import siteIcon from '../../images/site.svg';
import EditButton from '../EditButton';
import EditForm from '../EditForm';
import '../../styles/Details.scss';

export default class Details extends Component {
	state = {
		pending: {
			address: '',
			phone: '',
			email: '',
			website: '',
		},
		defined: {
			address: '',
			phone: '',
			email: '',
			website: '',
		},
		active: false,
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({
			...this.state,
			defined: {
				address: this.state.pending.address,
				phone: this.state.pending.phone,
				email: this.state.pending.email,
				website: this.state.pending.website,
			},
			active: false,
		});
	};

	toggleEdit = () => {
		this.setState({ active: !this.state.active });
	};

	handleCancel = (e) => {
		e?.preventDefault();
		this.toggleEdit();
		this.setState({
			pending: {
				address: this.state.defined.address,
				phone: this.state.defined.phone,
				email: this.state.defined.email,
				website: this.state.defined.website,
			},
		});
	};

	renderEdit = () => {
		let { address, phone, email, website } = this.state.pending;

		return (
			<EditForm cancel={this.handleCancel} submit={this.handleSubmit}>
				<div className="detail">
					<img src={homeIcon} alt="" className="icon" />
					<div className="text_title">
						<span>Home Address:</span>
					</div>
					<input
						type="text"
						className="content--edit"
						name="address"
						value={address}
						onChange={(e) => {
							this.setState({
								pending: {
									...this.state.pending,
									address: e.target.value,
								},
							});
						}}
					/>
				</div>
				<div className="detail">
					<img src={phoneIcon} alt="" className="icon" />
					<div className="text_title">
						<span>Phone Number:</span>
					</div>
					<input
						type="tel"
						className="content--edit"
						name="phone"
						value={phone}
						// eslint-disable-next-line max-len
						pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
						onChange={(e) => {
							this.setState({
								pending: {
									...this.state.pending,
									phone: e.target.value,
								},
							});
						}}
					/>
				</div>
				<div className="detail">
					<img src={mailIcon} alt="" className="icon" />
					<div className="text_title">
						<span>Email:</span>
					</div>
					<input
						type="email"
						className="content--edit"
						name="email"
						value={email}
						pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"
						onChange={(e) => {
							this.setState({
								pending: {
									...this.state.pending,
									email: e.target.value,
								},
							});
						}}
					/>
				</div>
				<div className="detail">
					<img src={siteIcon} alt="" className="icon" />
					<div className="text_title">
						<span>Site:</span>
					</div>
					<div className="content">
						<input
							type="text"
							className="content--edit"
							name="website"
							value={website}
							onChange={(e) => {
								this.setState({
									pending: {
										...this.state.pending,
										website: e.target.value,
									},
								});
							}}
						/>
					</div>
				</div>
			</EditForm>
		);
	};

	renderDisplay = () => {
		let { address, phone, email, website } = this.state.defined;

		return (
			<>
				<div className="detail">
					<img src={homeIcon} alt="" className="icon" />
					<div className="text_title">
						<span>Home Address:</span>
					</div>
					<div className="content">{address || 'address'}</div>
				</div>
				<div className="detail">
					<img src={phoneIcon} alt="" className="icon" />
					<div className="text_title">
						<span>Phone Number:</span>
					</div>
					<div className="content">{phone || 'phone'}</div>
				</div>
				<div className="detail">
					<img src={mailIcon} alt="" className="icon" />
					<div className="text_title">
						<span>Email:</span>
					</div>
					<div className="content">{email || 'email'}</div>
				</div>
				<div className="detail">
					<img src={siteIcon} alt="" className="icon" />
					<div className="text_title">
						<span>Site:</span>
					</div>
					<div className="content">
						<a
							href={'http://' + website || 'blank'}
							target="_blank"
						>
							{website || 'website.com'}
						</a>
					</div>
				</div>
				<div className="actionCont">
					<EditButton toggleEdit={this.toggleEdit} />
				</div>
			</>
		);
	};

	render() {
		return (
			<div className="details">
				<div className="category">Contact</div>
				<div className="details-details">
					{this.state.active
						? this.renderEdit()
						: this.renderDisplay()}
				</div>
			</div>
		);
	}
}
