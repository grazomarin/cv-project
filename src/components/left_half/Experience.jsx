import React, { Component } from 'react';
import '../../styles/Experience.scss';
import uniqid from 'uniqid';
import EditButton from '../EditButton';
import AddButton from '../AddButton';
import EditForm from '../EditForm';

class ExperienceItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { jobTitle, company, date, description, id } = this.props.info;
		return (
			<li>
				<div className="text_title2">
					{jobTitle || 'Title'}{' '}
					<EditButton
						toggleEdit={() => this.props.func.toggleEdit(id)}
					/>
				</div>
				<div className="job-about">
					<span>{company || 'Company'}</span>{' '}
					<span className="job-about_date">
						{date.from || 'from'}-{date.to || 'to'}
					</span>
				</div>
				<div className="job-description">
					<div className="text_title">Description:</div>
					<div>{description || 'Description'}</div>
				</div>
			</li>
		);
	}
}

class ExperienceItemEdit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			jobTitle: this.props.info.jobTitle,
			company: this.props.info.company,
			description: this.props.info.description,
			date: {
				from: this.props.info.date.from,
				to: this.props.info.date.to,
			},
			id: this.props.info.id,
		};
	}

	render() {
		let { jobTitle, company, description, date, id } = this.state;
		const { toggleEdit, handleSubmit } = this.props.func;
		return (
			<li className="experience-details--edit">
				<EditForm
					submit={(e) => handleSubmit(id, e)}
					cancel={(e) => toggleEdit(id, e)}
				>
					<input
						className="text_title2--edit"
						placeholder="Title"
						name="title"
						value={jobTitle}
						onChange={(e) => {
							this.setState({
								...this.state,
								jobTitle: e.target.value,
							});
						}}
					/>

					<input
						className="company--edit"
						placeholder="Company"
						name="company"
						value={company}
						onChange={(e) => {
							this.setState({
								...this.state,
								company: e.target.value,
							});
						}}
					/>

					<input
						className="description--edit"
						placeholder="Description"
						name="description"
						value={description}
						onChange={(e) => {
							this.setState({
								...this.state,
								description: e.target.value,
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

class Experience extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [
				{
					jobTitle: '',
					company: '',
					description: '',
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
					jobTitle: e.target.title.value,
					company: e.target.company.value,
					description: e.target.description.value,
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
					jobTitle: '',
					company: '',
					description: '',
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
			<div className="experience">
				<div className="category2">Experience</div>
				<div className="experience-details">
					<ul>
						{this.state.items.map((item) => {
							return item.active ? (
								<ExperienceItemEdit
									key={item.id}
									info={item}
									func={{
										toggleEdit: this.toggleEdit,
										handleSubmit: this.handleSubmit,
									}}
								/>
							) : (
								<ExperienceItem
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

export default Experience;
