import React, { Component } from 'react';
import '../../styles/Skills.scss';
import uniqid from 'uniqid';
import EditButton from '../EditButton';

class SkillItem extends Component {
	state = {
		name: this.props.item.name,
		id: this.props.item.id,
	};

	render() {
		return <li>{this.state.name}</li>;
	}
}

export default class Skills extends Component {
	state = {
		items: [{ name: '--skill--', id: uniqid() }],
	};
	render() {
		return (
			<div className="skills">
				<div className="category">Skills</div>
				<ul>
					{this.state.items.map((item) => {
						return <SkillItem item={item} key={item.id} />;
					})}
				</ul>
				<EditButton active={this.state.active} />
			</div>
		);
	}
}
