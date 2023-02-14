import React, { useState } from 'react';
import homeIcon from '../../images/home.svg';
import mailIcon from '../../images/mail.svg';
import phoneIcon from '../../images/phone.svg';
import siteIcon from '../../images/site.svg';
import EditButton from '../EditButton';
import EditForm from '../EditForm';
import '../../styles/Details.scss';

const Details = () => {
	const [address, setAddress] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [website, setWebsite] = useState('');

	const [tempAddress, setTempAddress] = useState('');
	const [tempPhone, setTempPhone] = useState('');
	const [tempEmail, setTempEmail] = useState('');
	const [tempWebsite, setTempWebsite] = useState('');

	const [active, setActive] = useState('');

	const toggleEdit = () => setActive(!active);

	const handleSubmit = () => {
		setAddress(tempAddress);
		setPhone(tempPhone);
		setEmail(tempEmail);
		setWebsite(tempWebsite);
		toggleEdit();
	};

	const handleCancel = () => {
		setTempAddress(address);
		setTempPhone(phone);
		setTempEmail(email);
		setTempWebsite(website);
		toggleEdit();
	};

	const renderEdit = () => (
		<EditForm cancel={handleCancel} submit={handleSubmit}>
			<div className="detail">
				<img src={homeIcon} alt="" className="icon" />
				<div className="text_title">
					<span>Home Address:</span>
				</div>
				<input
					type="text"
					className="content--edit"
					name="address"
					value={tempAddress}
					onChange={(e) => {
						setTempAddress(e.target.value);
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
					value={tempPhone}
					// eslint-disable-next-line max-len
					pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
					onChange={(e) => {
						setTempPhone(e.target.value);
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
					value={tempEmail}
					pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"
					onChange={(e) => {
						setTempEmail(e.target.value);
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
						value={tempWebsite}
						onChange={(e) => {
							setTempWebsite(e.target.value);
						}}
					/>
				</div>
			</div>
		</EditForm>
	);

	const renderDisplay = () => (
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
						rel="noreferrer"
					>
						{website || 'website.com'}
					</a>
				</div>
			</div>
			<div className="actionCont">
				<EditButton toggleEdit={toggleEdit} />
			</div>
		</>
	);

	return (
		<div className="details">
			<div className="category">Contact</div>
			<div className="details-details">
				{active ? renderEdit() : renderDisplay()}
			</div>
		</div>
	);
};

export default Details;
