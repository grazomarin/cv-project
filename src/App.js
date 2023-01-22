import React, { Component } from 'react';
import Title from './components/Title';
import General from './components/General';
import './styles/App.scss';
// import uniqid from "uniqid";

export default class App extends Component {
	render() {
		return (
			<div className="cv">
				<Title />
				<General />
			</div>
		);
	}
}
