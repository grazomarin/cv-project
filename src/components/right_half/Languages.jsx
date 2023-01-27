import React, { Component } from 'react';
import '../../styles/Languages.scss';
import uniqid from 'uniqid';
import EditButton from '../EditButton';
import AddButton from '../AddButton';

class LanguageItem extends Component {
	state = {
		language: this.props.item.language,
		value: this.props.item.value,
	};

	returnLevel(val) {
		return val === '1'
			? 'A1'
			: val === '2'
			? 'A2'
			: val === '3'
			? 'B1'
			: val === '4'
			? 'B2'
			: val === '5'
			? 'C1'
			: val === '6'
			? 'C2'
			: 'Error';
	}

	render() {
		return (
			<div className="language">
				<div className="language_title">
					<span>{this.state.language}</span>{' '}
					<span>{this.returnLevel(this.state.value)}</span>
				</div>
				<input
					type="range"
					min="1"
					max="6"
					value={this.state.value}
					onChange={(e) => this.setState({ value: e.target.value })}
				/>
			</div>
		);
	}
}

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
				<div className="actionCont">
					<AddButton />
					<EditButton active={this.state.active} />
				</div>
			</div>
		);
	}
}
