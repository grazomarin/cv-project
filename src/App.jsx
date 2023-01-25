import React, { Component } from 'react';
import './styles/App.scss';
import Title from './components/left_half/Title';
import Experience from './components/left_half/Experience';
import Education from './components/left_half/Education';
import About from './components/left_half/About';
import Avatar from './components/right_half/Avatar';
import Details from './components/right_half/Details';
import Skills from './components/right_half/Skills';
import Languages from './components/right_half/Languages';
import uniqid from 'uniqid';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			avatar: {
				src: '',
			},

			skills: [
				{
					skill: '',
					id: uniqid(),
				},
			],
		};
	}
	render() {
		return (
			<div className="cv">
				<div className="left">
					<Title title={this.state.title} />
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
