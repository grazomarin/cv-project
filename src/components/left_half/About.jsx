import React, { Component } from 'react';
import '../../styles/About.scss';
import EditButton from '../EditButton';
import EditForm from '../EditForm';

export default class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '--About Text--',
			active: false,
		};
	}

	toggleEdit = () => {
		this.setState({ active: !this.state.active });
	};

	renderEdit = () => {
		return (
			<EditForm>
				<div className="about_about--edit">
					<textarea
						name="about"
						id=""
						rows="5"
						// eslint-disable-next-line max-len
						placeholder="Write something interesting about yourself...."
					></textarea>
				</div>
			</EditForm>
		);
	};

	renderDisplay = () => {
		return (
			<>
				<div className="about_about">
					<p>{this.state.text}</p>
				</div>
				<EditButton active={this.state.active} fn={this.toggleEdit} />
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
