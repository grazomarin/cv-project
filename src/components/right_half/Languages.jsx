import React, { useState } from 'react';
import '../../styles/Languages.scss';
import uniqid from 'uniqid';
import EditButton from '../EditButton';
import AddButton from '../AddButton';
import EditForm from '../EditForm';
import RemoveButton from '../RemoveButton';

const Languages = () => {
	const [languages, setLanguages] = useState([
		{ id: uniqid(), language: '', level: '1' },
	]);
	const [active, setActive] = useState(false);

	const toggleEdit = () => setActive(!active);

	const handleAdd = () => {
		setLanguages((prev) => [
			...prev,
			{ id: uniqid(), language: '', level: '1' },
		]);
	};

	const handleRemove = (id) => {
		setLanguages((prev) =>
			prev.filter((language) => !(language.id === id))
		);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!e.target.language) return;
		const updated = Array.from(e.target.language);

		switch (updated.length) {
			case 0:
				setLanguages([
					{
						id: uniqid(),
						language: e.target.language.value,
						level: e.target.level.value,
					},
				]);
				break;

			default:
				setLanguages(
					(function rec(i = 0) {
						if (i === updated.length) return [];
						return [
							{
								id: uniqid(),
								language: e.target.language[i].value,
								level: e.target.level[i].value,
							},
							...rec((i = i + 1)),
						];
					})()
				);
				break;
		}
		toggleEdit();
	};

	const handleCancel = () => toggleEdit();

	const renderDisplay = () => (
		<div className="languages-cont">
			{languages.map((language) => {
				return (
					<LanguageItem
						key={language.id}
						id={language.id}
						active={active}
						language={language.language}
						level={language.level}
						remove={handleRemove}
					/>
				);
			})}
			<div className="actionCont">
				<EditButton toggleEdit={toggleEdit} />
			</div>
		</div>
	);

	const renderEdit = () => (
		<div className="languages-cont">
			<EditForm submit={handleSubmit} cancel={handleCancel}>
				{languages.map((language) => {
					return (
						<LanguageItem
							key={language.id}
							id={language.id}
							active={active}
							language={language.language}
							level={language.level}
							remove={handleRemove}
						/>
					);
				})}
			</EditForm>
			<div className="actionCont">
				<AddButton add={handleAdd} />
			</div>
		</div>
	);

	return (
		<div className="languages">
			<div className="category">Languages</div>
			{active ? renderEdit() : renderDisplay()}
		</div>
	);
};

const LanguageItem = ({ id, active, remove, ...props }) => {
	const [language, setLanguage] = useState(props.language);
	const [level, setLevel] = useState(props.level);

	const returnLevel = (lvl) => {
		return lvl === '1'
			? 'A1'
			: lvl === '2'
			? 'A2'
			: lvl === '3'
			? 'B1'
			: lvl === '4'
			? 'B2'
			: lvl === '5'
			? 'C1'
			: lvl === '6'
			? 'C2'
			: '<none>';
	};

	const renderDisplay = () => (
		<div className="language_title">
			<div>
				<span>{language || '<empty>'}</span>{' '}
				<RemoveButton remove={() => remove(id)} />
			</div>
			<span>{returnLevel(level)}</span>
		</div>
	);

	const renderEdit = () => (
		<div className="language_title--edit">
			<input
				type="text"
				name="language"
				value={language}
				onChange={(e) => setLanguage(e.target.value)}
			/>
			<span>{returnLevel(level)}</span>
		</div>
	);

	return (
		<div className="language">
			{active ? renderEdit() : renderDisplay()}
			<input
				type="range"
				name="level"
				min="1"
				max="6"
				value={level}
				onChange={(e) => setLevel(e.target.value)}
			/>
		</div>
	);
};

export default Languages;
