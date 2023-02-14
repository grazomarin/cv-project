import React, { useState } from 'react';
import placeholder from '../../images/placeholder.jpg';
import '../../styles/Avatar.scss';

const Avatar = () => {
	const [source, setSource] = useState(placeholder);
	const [error, setError] = useState(false);

	const toggleError = () => setError(!error);

	const renderError = () => {
		return <div className="error">Error: Invalid format</div>;
	};

	const validateFileExtension = (file) => {
		const allowedExtensions = /(jpg|jpeg|svg|png)/;
		return allowedExtensions.exec(file.type) ? true : false;
	};

	const handleImageChange = (e) => {
		const newImage = e.target.files[0];
		if (validateFileExtension(newImage)) {
			setSource(URL.createObjectURL(newImage));
		} else {
			toggleError();
			setTimeout(toggleError, 3000);
		}
	};

	return (
		<div className="avatar">
			{error ? renderError() : null}
			<img src={source} alt="" className="avatar_img" />
			<label htmlFor="img-upload" className="avatar_input">
				Upload Image
			</label>
			<input
				id="img-upload"
				type="file"
				accept=".jpg,.jpeg,.svg,.png"
				name="file1"
				onChange={handleImageChange}
			/>
		</div>
	);
};

export default Avatar;
