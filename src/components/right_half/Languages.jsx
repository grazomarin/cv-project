import React, { Component } from 'react';
import '../../styles/Languages.scss';
import uniqid from 'uniqid';
import EditButton from '../EditButton';
import AddButton from '../AddButton';
import EditForm from '../EditForm';
import DeleteButton from '../DeleteButton';

class LanguageItem extends Component {
	state = {
		language: this.props.item.language,
		level: this.props.item.level,
	};

	render() {
		return (
			<div className="language">
				<div className="language_title">
					<div>
						<span>{this.state.language || '<empty>'}</span>{' '}
						<DeleteButton
							delete={() => {
								this.props.func.delete(this.props.item.id);
							}}
						/>
					</div>
					<span>{this.props.func.returnLevel(this.state.level)}</span>
				</div>
				<input
					type="range"
					min="1"
					max="6"
					value={this.state.level}
					onChange={(e) => this.setState({ level: e.target.value })}
				/>
			</div>
		);
	}
}

class LanguageItemEdit extends Component {
	state = {
		language: this.props.item.language,
		level: this.props.item.level,
	};

	render() {
		return (
			<div className="language">
				<div className="language_title--edit">
					<input
						type="text"
						name="language"
						value={this.state.language}
						onChange={(e) =>
							this.setState({ language: e.target.value })
						}
					/>
					<span>{this.props.func.returnLevel(this.state.level)}</span>
				</div>
				<input
					type="range"
					name="level"
					min="1"
					max="6"
					value={this.state.level}
					onChange={(e) => this.setState({ level: e.target.value })}
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
				level: '5',
				id: uniqid(),
			},
		],
		active: false,
	};

	returnLevel(lev) {
		return lev === '1'
			? 'A1'
			: lev === '2'
			? 'A2'
			: lev === '3'
			? 'B1'
			: lev === '4'
			? 'B2'
			: lev === '5'
			? 'C1'
			: lev === '6'
			? 'C2'
			: '<none>';
	}

	toggleEdit = (e) => {
		e?.preventDefault();
		this.setState({
			...this.state,
			active: !this.state.active,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		let updated = [];
		if (e.target.language?.length >= 2) {
			for (let i = 0; i < e.target.language.length; i++) {
				updated.push({
					language: e.target.language[i].value,
					level: e.target.level[i].value,
					id: uniqid(),
				});
			}
		} else {
			updated = [
				{
					language: e.target.language?.value,
					level: e.target.level?.value,
					id: uniqid(),
				},
			];
		}
		this.setState({
			items: updated,
			active: false,
		});
	};

	handleDelete = (id) => {
		this.state.items.forEach((item) => {
			if (item.id === id) {
				this.state.items.splice(this.state.items.indexOf(item), 1);
			}
		});
		this.setState({ items: this.state.items });
	};

	createItem = () => {
		this.setState({
			items: [
				...this.state.items,
				{
					language: '',
					level: '1',
					id: uniqid(),
				},
			],
		});
	};

	renderEdit = () => {
		return (
			<div className="languages-cont">
				<EditForm
					submit={(e) => this.handleSubmit(e)}
					cancel={(e) => this.toggleEdit(e)}
				>
					{this.state.items.map((item) => {
						return (
							<LanguageItemEdit
								item={item}
								key={item.id}
								func={{
									returnLevel: this.returnLevel,
								}}
							/>
						);
					})}
				</EditForm>
				<div className="actionCont">
					<AddButton func={{ createItem: this.createItem }} />
				</div>
			</div>
		);
	};

	renderDisplay = () => {
		return (
			<div className="languages-cont">
				{this.state.items.map((item) => {
					return (
						<LanguageItem
							item={item}
							key={item.id}
							func={{
								returnLevel: this.returnLevel,
								delete: this.handleDelete,
							}}
						/>
					);
				})}
				<div className="actionCont">
					<EditButton toggleEdit={this.toggleEdit} />
				</div>
			</div>
		);
	};

	render() {
		return (
			<div className="languages">
				<div className="category">Languages</div>
				{this.state.active ? this.renderEdit() : this.renderDisplay()}
			</div>
		);
	}
}
