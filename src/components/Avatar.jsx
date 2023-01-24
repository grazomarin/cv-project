import React, { Component } from 'react';
import placeholder from '../images/placeholder.jpg';
import '../styles/Avatar.scss';

export default class Avatar extends Component {
	render() {
		return <img src={placeholder} alt="" className="avatar" />;
	}
}
