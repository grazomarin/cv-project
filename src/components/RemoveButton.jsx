import React from 'react';
import deleteSrc from '../images/delete.svg';

const removeButton = ({ remove }) => {
	return <img src={deleteSrc} alt="" className="delete" onClick={remove} />;
};

export default removeButton;
