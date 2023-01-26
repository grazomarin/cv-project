import React, { Component } from 'react';
import '../styles/EditForm.scss';

class EditForm extends Component {
	render() {
		return (
			<form className="editForm" action="submit">
				{this.props.children}
				<div className="buttonCont">
					<button className="submit">Submit</button>
					<button className="cancel">Cancel</button>
				</div>
			</form>
		);
	}
}

export default EditForm;
