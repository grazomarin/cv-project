import React, { useState } from 'react';
import '../../styles/Skills.scss';
import uniqid from 'uniqid';
import EditButton from '../EditButton';
import AddButton from '../AddButton';
import EditForm from '../EditForm';
import RemoveButton from '../RemoveButton';

const Skills = () => {
	const [skills, setSkills] = useState([{ id: uniqid(), content: '' }]);
	const [active, setActive] = useState(false);

	const toggleEdit = () => setActive(!active);

	const handleAdd = () =>
		setSkills((prev) => [...prev, { id: uniqid(), content: '' }]);

	const handleRemove = (id) => {
		setSkills((prev) => prev.filter((skill) => !(skill.id === id)));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!e.target.skill) return;
		const updated = Array.from(e.target.skill);

		switch (updated.length) {
			case 0:
				setSkills([{ id: uniqid(), content: e.target.skill.value }]);
				break;

			default:
				setSkills(
					updated.map((skill) => {
						return {
							id: uniqid(),
							content: skill.value,
						};
					})
				);
				break;
		}
		toggleEdit();
	};

	const handleCancel = () => toggleEdit();

	const renderDisplay = () => (
		<>
			<ul className="list">
				{skills.map((skill) => {
					return (
						<SkillItem
							key={skill.id}
							id={skill.id}
							active={active}
							content={skill.content}
							remove={handleRemove}
						/>
					);
				})}
			</ul>
			<div className="actionCont">
				<EditButton toggleEdit={toggleEdit} />
			</div>
		</>
	);

	const renderEdit = () => (
		<ul className="list--edit">
			<EditForm submit={handleSubmit} cancel={handleCancel}>
				{skills.map((skill) => {
					return (
						<SkillItem
							key={skill.id}
							id={skill.id}
							active={active}
							content={skill.content}
							remove={handleRemove}
						/>
					);
				})}
			</EditForm>
			<div className="actionCont">
				<AddButton add={handleAdd} />
			</div>
		</ul>
	);

	return (
		<div className="skills">
			<div className="category">Skills</div>
			{active ? renderEdit() : renderDisplay()}
		</div>
	);
};

const SkillItem = ({ id, active, remove, ...props }) => {
	const [content, setContent] = useState(props.content);

	const renderDisplay = () => (
		<li>
			{content || '<empty>'}{' '}
			<RemoveButton
				remove={() => {
					remove(id);
				}}
			/>
		</li>
	);

	const renderEdit = () => (
		<li>
			<input
				type="text"
				name="skill"
				value={content}
				onChange={(e) => {
					setContent(e.target.value);
				}}
			/>
		</li>
	);

	return active ? renderEdit() : renderDisplay();
};

export default Skills;
