import React, { Component } from 'react';
import '../../styles/About.scss';
import EditButton from '../EditButton';
import EditForm from '../EditForm';

export default class About extends Component {
	constructor(props) {
		super(props);
		this.placeholder = '--About Text--';
		this.state = {
			text: '',
			active: false,
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({
			text: e.target.about.value,
		});
		this.toggleEdit();
	};

	toggleEdit = (e) => {
		e?.preventDefault();
		this.setState({ active: !this.state.active });
	};

	renderEdit = () => {
		return (
			<EditForm cancel={this.toggleEdit} submit={this.handleSubmit}>
				<div className="about_about--edit">
					<textarea
						name="about"
						id=""
						rows="5"
						// eslint-disable-next-line max-len
						placeholder="Write something interesting about yourself...."
						defaultValue={this.state.text}
					></textarea>
				</div>
			</EditForm>
		);
	};

	renderDisplay = () => {
		return (
			<>
				<div className="about_about">
					<p>{this.state.text || this.placeholder}</p>
				</div>
				<div className="actionCont">
					<EditButton toggleEdit={this.toggleEdit} />
				</div>
			</>
		);
	};

	render() {
		return (
			<div className="about">
				<div className="category2">About</div>
				{this.state.active ? this.renderEdit() : this.renderDisplay()}
			</div>
		);
	}
}
