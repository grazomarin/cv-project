import React, { Component } from 'react';
import EditButton from '../EditButton';
import '../../styles/Title.scss';
import EditForm from '../EditForm';

export default class Title extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '--Name--',
			title: '--Title--',
			active: false,
		};
	}

	toggleEdit = () => {
		this.setState({ active: !this.state.active });
	};

	renderEdit = () => {
		return (
			<EditForm>
				<div className="title--edit">
					<input
						className="title_name--edit"
						name="name"
						type="text"
						placeholder="Name"
					/>
					<input
						className="title_title--edit"
						name="title"
						type="text"
						placeholder="Title"
					/>
				</div>
			</EditForm>
		);
	};

	renderDisplay = () => {
		return (
			<>
				<div className="title_name">{this.state.name}</div>
				<div className="title_title">{this.state.title}</div>
				<EditButton active={this.state.active} fn={this.toggleEdit} />
			</>
		);
	};

	render() {
		return (
			<div className="title">
				{/* eslint-disable-next-line max-len */}
				{/* {this.state.active ? this.renderEdit() : this.renderDisplay()} */}
				{this.renderDisplay()}
			</div>
		);
	}
}
