import React, { Component } from 'react';
import editIcon from '../../images/edit.svg';
import '../../styles/Skills.scss';
import uniqid from 'uniqid';
import SkillItem from './SkillItem';

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
				<img src={editIcon} alt="" className="edit" />
			</div>
		);
	}
}
