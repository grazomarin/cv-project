import React, { Component } from 'react';

export default class LanguageItem extends Component {
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
