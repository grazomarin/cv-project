import React, { useState } from 'react';
import '../../styles/Education.scss';
import uniqid from 'uniqid';
import EditButton from '../EditButton';
import AddButton from '../AddButton';
import EditForm from '../EditForm';
import DeleteButton from '../DeleteButton';

function Education() {
	const [tasks, setTasks] = useState([{ id: uniqid(), active: false }]);

	const handleDelete = (id) => {
		setTasks(
			tasks.filter((task) => {
				return task.id === id ? false : true;
			})
		);
	};

	const handleAdd = () =>
		setTasks([...tasks, { id: uniqid(), active: true }]);

	return (
		<div className="education">
			<div className="category2">Education</div>
			<div className="education-education">
				<ul>
					{tasks.map((task) => {
						return (
							<EducationItem
								key={task.id}
								id={task.id}
								initActive={task.active}
								handleDelete={handleDelete}
							/>
						);
					})}
				</ul>
			</div>
			<div className="actionCont">
				<AddButton func={{ createItem: handleAdd }} />
			</div>
		</div>
	);
}

function EducationItem({ id, initActive, handleDelete }) {
	const [university, setUniversity] = useState('');
	const [degree, setDegree] = useState('');
	const [from, setFrom] = useState('');
	const [to, setTo] = useState('');

	const [tempUniversity, setTempUniversity] = useState('');
	const [tempDegree, setTempDegree] = useState('');
	const [tempFrom, setTempFrom] = useState('');
	const [tempTo, setTempTo] = useState('');

	const [active, setActive] = useState(initActive);

	const toggleEdit = () => setActive(!active);

	function handleCancel() {
		setTempUniversity(university);
		setTempDegree(degree);
		setTempFrom(from);
		setTempTo(to);
		toggleEdit();
	}

	function handleSubmit() {
		setUniversity(tempUniversity);
		setDegree(tempDegree);
		setFrom(tempFrom);
		setTo(tempTo);
		toggleEdit();
	}

	function renderDisplay() {
		return (
			<li>
				<div className="text_title2">
					{degree || 'Degree'} <EditButton toggleEdit={toggleEdit} />
				</div>
				<div className="university">
					<span>{university || 'University'}</span>{' '}
					<span className="university_date">
						{from || 'from'} - {to || 'to'}
					</span>
				</div>
				<DeleteButton delete={() => handleDelete(id)} />
			</li>
		);
	}

	function renderEdit() {
		return (
			<li className="education-education--edit">
				<EditForm submit={handleSubmit} cancel={handleCancel}>
					<input
						className="text_title2--edit"
						placeholder="Degree"
						name="degree"
						value={tempDegree}
						onChange={(e) => {
							setTempDegree(e.target.value);
						}}
					/>

					<input
						className="university--edit"
						placeholder="University"
						name="university"
						value={tempUniversity}
						onChange={(e) => {
							setTempUniversity(e.target.value);
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
	}

	return active ? renderEdit() : renderDisplay();
}

export default Education;
