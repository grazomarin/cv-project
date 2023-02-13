import React, { useState } from 'react';
import '../../styles/About.scss';
import EditButton from '../EditButton';
import EditForm from '../EditForm';

const About = () => {
	const [text, setText] = useState('');
	const [active, setActive] = useState(false);

	const toggleEdit = () => setActive(!active);

	function handleSubmit(e) {
		setText(e.target.value);
		toggleEdit();
	}

	function renderEdit() {
		return (
			<EditForm cancel={toggleEdit} submit={handleSubmit}>
				<div className="about_about--edit">
					<textarea
						name="about"
						id=""
						rows="5"
						// eslint-disable-next-line max-len
						placeholder="Write something interesting about yourself...."
						defaultValue={text}
					></textarea>
				</div>
			</EditForm>
		);
	}

	function renderDisplay() {
		return (
			<>
				<div className="about_about">
					<p>{text || 'About Text'}</p>
				</div>
				<div className="actionCont">
					<EditButton toggleEdit={toggleEdit} />
				</div>
			</>
		);
	}

	return (
		<div className="about">
			<div className="category2">About</div>
			{active ? renderEdit() : renderDisplay()}
		</div>
	);
};

export default About;
