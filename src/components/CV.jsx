import React from 'react';
import Title from './left_half/Title';
import Experience from './left_half/Experience';
import Education from './left_half/Education';
import About from './left_half/About';
import Avatar from './right_half/Avatar';
import Details from './right_half/Details';
import Skills from './right_half/Skills';
import Languages from './right_half/Languages';

const CV = React.forwardRef((props, ref) => {
	return (
		<div className="cv" ref={ref}>
			<div className="left">
				<Title />
				<About />
				<Education />
				<Experience />
			</div>
			<div className="right">
				<Avatar />
				<Details />
				<Skills />
				<Languages />
			</div>
		</div>
	);
});

export default CV;
