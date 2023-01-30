import React, { Component } from 'react';
import '../../styles/Education.scss';
import uniqid from 'uniqid';
import EditButton from '../EditButton';
import AddButton from '../AddButton';
import EditForm from '../EditForm';

class EducationItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { degree, university, date, id } = this.props.info;
		return (
			<li>
				<div className="text_title2">
					{degree || 'Degree'}{' '}
					<EditButton
						toggleEdit={() => this.props.func.toggleEdit(id)}
					/>
				</div>
				<div className="university">
					<span>{university || 'University'}</span>{' '}
					<span className="university_date">
						{date.from || 'from'}-{date.to || 'to'}
					</span>
				</div>
			</li>
		);
	}
}

class EducationItemEdit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			university: this.props.info.university,
			degree: this.props.info.degree,
			date: {
				from: this.props.info.date.from,
				to: this.props.info.date.to,
			},
			id: this.props.info.id,
		};
	}

	render() {
		let { university, degree, date, id } = this.state;
		const { toggleEdit, handleSubmit } = this.props.func;
		return (
			<li className="education-education--edit">
				<EditForm
					submit={(e) => handleSubmit(id, e)}
					cancel={(e) => toggleEdit(id, e)}
				>
					<input
						className="text_title2--edit"
						placeholder="Degree"
						name="degree"
						value={degree}
						onChange={(e) => {
							this.setState({
								...this.state,
								degree: e.target.value,
							});
						}}
					/>

					<input
						className="university--edit"
						placeholder="University"
						name="university"
						value={university}
						onChange={(e) => {
							this.setState({
								...this.state,
								university: e.target.value,
							});
						}}
					/>

					<div className="dateEdit">
						<input
							className="date_from"
							type="number"
							min="0"
							max="9999"
							placeholder="from"
							name="from"
							value={date.from}
							onChange={(e) => {
								this.setState({
									...this.state,
									date: {
										from: e.target.value,
										to: this.state.date.to,
									},
								});
							}}
						/>
						-
						<input
							className="date_to"
							type="number"
							min="0"
							max="9999"
							placeholder="to"
							name="to"
							value={date.to}
							onChange={(e) => {
								this.setState({
									...this.state,
									date: {
										from: this.state.date.from,
										to: e.target.value,
									},
								});
							}}
						/>
					</div>
				</EditForm>
			</li>
		);
	}
}

export default class Education extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [
				{
					degree: '',
					university: '',
					date: {
						from: '',
						to: '',
					},
					id: uniqid(),
					active: false,
				},
			],
		};
	}

	handleSubmit = (id, e) => {
		e.preventDefault();
		this.state.items.map((item) => {
			if (item.id === id) {
				this.state.items.splice(this.state.items.indexOf(item), 1, {
					degree: e.target.degree.value,
					university: e.target.university.value,
					date: {
						from: e.target.from.value,
						to: e.target.to.value,
					},
					id: uniqid(),
					active: false,
				});
			}
		});
		this.setState({
			items: [...this.state.items],
		});
	};

	toggleEdit = (id, e) => {
		e?.preventDefault();
		this.setState({
			items: this.state.items.map((item) => {
				if (item.id === id) {
					return {
						...item,
						active: !item.active,
					};
				}
				return item;
			}),
		});
	};

	createItem = () => {
		this.setState({
			items: [
				...this.state.items,
				{
					degree: '',
					university: '',
					date: {
						from: '',
						to: '',
					},
					id: uniqid(),
					active: true,
				},
			],
		});
	};

	render() {
		return (
			<div className="education">
				<div className="category2">Education</div>
				<div className="education-education">
					<ul>
						{this.state.items.map((item) => {
							return item.active ? (
								<EducationItemEdit
									key={item.id}
									info={item}
									func={{
										toggleEdit: this.toggleEdit,
										handleSubmit: this.handleSubmit,
									}}
								/>
							) : (
								<EducationItem
									key={item.id}
									info={item}
									func={{ toggleEdit: this.toggleEdit }}
								/>
							);
						})}
					</ul>
				</div>
				<div className="actionCont">
					<AddButton func={{ createItem: this.createItem }} />
				</div>
			</div>
		);
	}
}
