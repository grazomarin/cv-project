import React, { Component } from 'react';
import editIcon from '../../images/edit.svg';

import '../../styles/Languages.scss';
import uniqid from 'uniqid';
import LanguageItem from './LanguageItem';

export default class Languages extends Component {
	state = {
		items: [
			{
				language: 'English',
				value: '5',
				id: uniqid(),
			},
		],
	};

	render() {
		return (
			<div className="languages">
				<div className="category">Languages</div>
				<div className="languages-cont">
					{this.state.items.map((item) => {
						return <LanguageItem item={item} key={item.id} />;
					})}
				</div>
				<img src={editIcon} alt="" className="edit" />
			</div>
		);
	}
}
