import React, { Component } from 'react';
import '../../styles/Skills.scss';
import uniqid from 'uniqid';
import EditButton from '../EditButton';
import AddButton from '../AddButton';
import EditForm from '../EditForm';
import DeleteButton from '../DeleteButton';

class SkillItem extends Component {
	render() {
		return (
			<li>
				{this.props.item.skill || '<empty>'}{' '}
				<DeleteButton
					delete={() => {
						this.props.func.delete(this.props.item.id);
					}}
				/>
			</li>
		);
	}
}

class SkillItemEdit extends Component {
	state = {
		skill: this.props.item.skill,
		id: this.props.item.id,
	};

	render() {
		return (
			<li>
				<input
					type="text"
					name="skill"
					value={this.state.skill}
					onChange={(e) => {
						this.setState({
							...this.state,
							skill: e.target.value,
						});
					}}
				/>
			</li>
		);
	}
}

export default class Skills extends Component {
	state = {
		items: [{ skill: 'skill', id: uniqid() }],
		active: false,
	};

	toggleEdit = (e) => {
		e?.preventDefault();
		this.setState({
			...this.state,
			active: !this.state.active,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		let updated;
		if (e.target.skill?.length >= 2) {
			updated = Array.from(e.target.skill).map((skill) => {
				return {
					skill: skill.value,
					id: uniqid(),
				};
			});
		} else {
			updated = [
				{
					skill: e.target.skill?.value,
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
					skill: '',
					id: uniqid(),
				},
			],
		});
	};

	renderEdit = () => {
		return (
			<ul className="list--edit">
				<EditForm
					submit={(e) => this.handleSubmit(e)}
					cancel={(e) => this.toggleEdit(e)}
				>
					{this.state.items.map((item) => {
						return <SkillItemEdit item={item} key={item.id} />;
					})}
				</EditForm>
				<div className="actionCont">
					<AddButton func={{ createItem: this.createItem }} />
				</div>
			</ul>
		);
	};

	renderDisplay = () => {
		return (
			<>
				<ul className="list">
					{this.state.items.map((item) => {
						return (
							<SkillItem
								item={item}
								key={item.id}
								func={{
									delete: this.handleDelete,
								}}
							/>
						);
					})}
				</ul>
				<div className="actionCont">
					<EditButton toggleEdit={this.toggleEdit} />
				</div>
			</>
		);
	};

	render() {
		return (
			<div className="skills">
				<div className="category">Skills</div>
				{this.state.active ? this.renderEdit() : this.renderDisplay()}
			</div>
		);
	}
}
