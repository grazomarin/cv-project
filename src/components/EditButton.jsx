import React from 'react';
import editIcon from '../images/edit.svg';

const EditButton = ({ toggleEdit }) => {
	return <img src={editIcon} alt="" className="edit" onClick={toggleEdit} />;
};

export default EditButton;
