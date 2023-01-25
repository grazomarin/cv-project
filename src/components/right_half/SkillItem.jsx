import React, { Component } from 'react';

export default class SkillItem extends Component {
	state = {
		name: this.props.item.name,
		id: this.props.item.id,
	};

	render() {
		return <li>{this.state.name}</li>;
	}
}
