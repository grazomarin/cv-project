import React, { useState } from 'react';
import '../../styles/Experience.scss';
import uniqid from 'uniqid';
import EditButton from '../EditButton';
import AddButton from '../AddButton';
import RemoveButton from '../RemoveButton';
import EditForm from '../EditForm';

const Experience = () => {
	const [tasks, setTasks] = useState([{ id: uniqid(), active: false }]);

	const handleRemove = (id) => {
		setTasks(
			tasks.filter((task) => {
				return task.id === id ? false : true;
			})
		);
	};

	const handleAdd = () =>
		setTasks([...tasks, { id: uniqid(), active: true }]);

	return (
		<div className="experience">
			<div className="category2">Experience</div>
			<div className="experience-details">
				<ul>
					{tasks.map((task) => {
						return (
							<ExperienceItem
								key={task.id}
								id={task.id}
								initActive={task.active}
								remove={handleRemove}
							/>
						);
					})}
				</ul>
			</div>
			<div className="actionCont">
				<AddButton add={handleAdd} />
			</div>
		</div>
	);
};

const ExperienceItem = ({ id, initActive, remove }) => {
	const [jobTitle, setJobTitle] = useState('');
	const [company, setCompany] = useState('');
	const [from, setFrom] = useState('');
	const [to, setTo] = useState('');
	const [description, setDescription] = useState('');

	const [tempJobTitle, setTempJobTitle] = useState('');
	const [tempCompany, setTempCompany] = useState('');
	const [tempFrom, setTempFrom] = useState('');
	const [tempTo, setTempTo] = useState('');
	const [tempDescription, setTempDescription] = useState('');

	const [active, setActive] = useState(initActive);

	const toggleEdit = () => setActive(!active);

	const handleCancel = () => {
		setTempJobTitle(jobTitle);
		setTempCompany(company);
		setTempFrom(from);
		setTempTo(to);
		setTempDescription(description);
		toggleEdit();
	};

	const handleSubmit = () => {
		setJobTitle(tempJobTitle);
		setCompany(tempCompany);
		setFrom(tempFrom);
		setTo(tempTo);
		setDescription(tempDescription);
		toggleEdit();
	};

	const renderDisplay = () => (
		<li>
			<div className="text_title2">
				{jobTitle || 'Title'} <EditButton toggleEdit={toggleEdit} />
			</div>
			<div className="job-about">
				<span>{company || 'Company'}</span>{' '}
				<span className="job-about_date">
					{from || 'from'} - {to || 'to'}
				</span>
			</div>
			<div className="job-description">
				<div className="text_title">Description:</div>
				<div>{description || 'Description'}</div>
			</div>
			<RemoveButton
				remove={() => {
					remove(id);
				}}
			/>
		</li>
	);

	const renderEdit = () => (
		<li className="experience-details--edit">
			<EditForm submit={handleSubmit} cancel={handleCancel}>
				<input
					className="text_title2--edit"
					placeholder="Title"
					name="title"
					value={tempJobTitle}
					onChange={(e) => {
						setTempJobTitle(e.target.value);
					}}
				/>

				<input
					className="company--edit"
					placeholder="Company"
					name="company"
					value={tempCompany}
					onChange={(e) => {
						setTempCompany(e.target.value);
					}}
				/>

				<input
					className="description--edit"
					placeholder="Description"
					name="description"
					value={tempDescription}
					onChange={(e) => {
						setTempDescription(e.target.value);
					}}
				/>

				<div className="dateEdit">
					<input
						className="date_from"
						type="number"
						min="0"
						max="9999"
						placeholder="from"
						name="from"
						value={tempFrom}
						onChange={(e) => {
							setTempFrom(e.target.value);
						}}
					/>
					-
					<input
						className="date_to"
						type="number"
						min="0"
						max="9999"
						placeholder="to"
						name="to"
						value={tempTo}
						onChange={(e) => {
							setTempTo(e.target.value);
						}}
					/>
				</div>
			</EditForm>
		</li>
	);

	return active ? renderEdit() : renderDisplay();
};

export default Experience;
