import React, { useState } from 'react';
import EditButton from '../EditButton';
import '../../styles/Title.scss';
import EditForm from '../EditForm';

const Title = () => {
	const [name, setName] = useState('');
	const [title, setTitle] = useState('');
	const [active, setActive] = useState(false);
	const [tempName, setTempName] = useState(name);
	const [tempTitle, setTempTitle] = useState(title);

	function handleCancel() {
		setTempName(name);
		setTempTitle(title);
		toggleEdit();
	}

	function handleSubmit() {
		setName(tempName);
		setTitle(tempTitle);
		toggleEdit();
	}

	function toggleEdit() {
		setActive(!active);
	}

	function renderEdit() {
		return (
			<EditForm cancel={handleCancel} submit={handleSubmit}>
				<div className="title--edit">
					<input
						className="title_name--edit"
						name="name"
						type="text"
						placeholder="Name"
						value={tempName}
						onChange={(e) => setTempName(e.target.value)}
					/>
					<input
						className="title_title--edit"
						name="title"
						type="text"
						placeholder="Title"
						value={tempTitle}
						onChange={(e) => setTempTitle(e.target.value)}
					/>
				</div>
			</EditForm>
		);
	}

	function renderDisplay() {
		return (
			<>
				<div className="title_name">{name || 'Name'}</div>
				<div className="title_title">{title || 'Title'}</div>
				<div className="actionCont">
					<EditButton toggleEdit={toggleEdit} />
				</div>
			</>
		);
	}

	return (
		<div className="title">{active ? renderEdit() : renderDisplay()}</div>
	);
};

export default Title;
