import React, { Component } from 'react';
import Title from './components/Title';
import General from './components/General';
import Experience from './components/Experience';
import Education from './components/Education';
import './styles/App.scss';
import About from './components/About';
// import uniqid from "uniqid";

export default class App extends Component {
	render() {
		return (
			<div className="cv">
				<Title />
				<About />
				<Education />
				<Experience />
				<General />
			</div>
		);
	}
}
