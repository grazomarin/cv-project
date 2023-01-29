import React, { Component } from 'react';
import EditButton from '../EditButton';
import '../../styles/Title.scss';
import EditForm from '../EditForm';

export default class Title extends Component {
	constructor(props) {
		super(props);
		this.placeholder = {
			name: 'Name',
			title: 'Title',
		};
		this.state = {
			pending: {
				name: '',
				title: '',
			},
			defined: {
				name: '',
				title: '',
			},
			active: false,
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({
			defined: {
				name: this.state.pending.name,
				title: this.state.pending.title,
			},
		});
		this.toggleEdit();
	};

	toggleEdit = (e) => {
		e?.preventDefault();
		this.handleCancel();
		this.setState({ active: !this.state.active });
	};

	handleCancel = () => {
		this.setState({
			pending: {
				name: this.state.defined.name,
				title: this.state.defined.title,
			},
		});
	};

	renderEdit = () => {
		return (
			<EditForm cancel={this.toggleEdit} submit={this.handleSubmit}>
				<div className="title--edit">
					<input
						className="title_name--edit"
						name="name"
						type="text"
						placeholder="Name"
						value={this.state.pending.name}
						onChange={(e) => {
							this.setState({
								pending: {
									name: e.target.value,
									title: this.state.pending.title,
								},
							});
						}}
					/>
					<input
						className="title_title--edit"
						name="title"
						type="text"
						placeholder="Title"
						value={this.state.pending.title}
						onChange={(e) => {
							this.setState({
								pending: {
									name: this.state.pending.name,
									title: e.target.value,
								},
							});
						}}
					/>
				</div>
			</EditForm>
		);
	};

	renderDisplay = () => {
		return (
			<>
				<div className="title_name">
					{this.state.defined.name || this.placeholder.name}
				</div>
				<div className="title_title">
					{this.state.defined.title || this.placeholder.title}
				</div>
				<div className="actionCont">
					<EditButton toggleEdit={this.toggleEdit} />
				</div>
			</>
		);
	};

	render() {
		return (
			<div className="title">
				{this.state.active ? this.renderEdit() : this.renderDisplay()}
			</div>
		);
	}
}
