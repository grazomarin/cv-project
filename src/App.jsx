import React, { Component } from 'react';
import './styles/App.scss';
import Title from './components/Title';
import Experience from './components/Experience';
import Education from './components/Education';
import About from './components/About';
import Avatar from './components/Avatar';
import Details from './components/Details';
import Skills from './components/Skills';
import Languages from './components/Languages';
// import uniqid from "uniqid";

export default class App extends Component {
	render() {
		return (
			<div className="cv">
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
	}
}
