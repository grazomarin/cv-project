import React, { Component } from 'react';
import '../../styles/Education.scss';
import uniqid from 'uniqid';
// import EditButton from '../EditButton';
import AddButton from '../AddButton';
import EditForm from '../EditForm';

class EducationItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			degree: this.props.item.degree,
			university: this.props.item.university,
			date: {
				from: this.props.item.date.from,
				to: this.props.item.date.to,
			},
			active: false,
		};
	}

	render() {
		let { degree, university, date } = this.state;
		return (
			<li>
				<div className="text_title2">
					{degree} {/*<EditButton active={this.state.active} />*/}
				</div>
				<div className="university">
					<span>
						{date.from}-{date.to}
					</span>{' '}
					<span>{university}</span>
				</div>
			</li>
		);
	}
}

// class EducationEditItem extends Component {}

export default class Education extends Component {
	state = {
		items: [
			{
				degree: '--Degree--',
				university: '--University--',
				date: {
					from: 'from',
					to: 'to',
				},
				id: uniqid(),
				active: false,
			},
			{
				degree: '--Degree--',
				university: '--University--',
				date: {
					from: 'from',
					to: 'to',
				},
				id: uniqid(),
				active: false,
			},
		],
	};

	renderDisplay = () => {
		return (
			<>
				<div className="education-education">
					<ul>
						{this.state.items.map((item) => {
							return <EducationItem item={item} key={item.id} />;
						})}
					</ul>
				</div>
				<div className="actionCont">
					<AddButton />
				</div>
			</>
		);
	};

	renderEdit = () => {
		return (
			<EditForm>
				<div className="education-education--edit"></div>
			</EditForm>
		);
	};

	render() {
		return (
			<div className="education">
				<div className="category2">Education</div>
				{this.state.active ? this.renderEdit() : this.renderDisplay()}
			</div>
		);
	}
}
