import React from 'react';
import addSrc from '../images/add.svg';

const AddButton = ({ add }) => {
	return <img className="add" onClick={add} src={addSrc} alt="" />;
};

export default AddButton;
