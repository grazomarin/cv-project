import React from 'react';
import '../styles/EditForm.scss';

const EditForm = ({ submit, cancel, children }) => {
	return (
		<form className="editForm" action="submit" onSubmit={submit}>
			{children}
			<div className="buttonCont">
				<button className="submit">Submit</button>
				<button className="cancel" type="button" onClick={cancel}>
					Cancel
				</button>
			</div>
		</form>
	);
};

export default EditForm;
