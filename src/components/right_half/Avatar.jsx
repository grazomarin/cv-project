import React, { Component } from 'react';
import placeholder from '../../images/placeholder.jpg';
import '../../styles/Avatar.scss';

export default class Avatar extends Component {
	state = {
		src: placeholder,
		error: false,
	};

	toggleError = () => {
		this.setState({ error: !this.state.error });
	};

	renderError = () => {
		return <div className="error">Error: Invalid format</div>;
	};

	validateFileExtension = (file) => {
		const allowedExtensions = /(jpg|jpeg|svg|png)/;
		if (allowedExtensions.exec(file.type)) {
			return true;
		} else {
			this.toggleError();
			setTimeout(this.toggleError, 3000);
		}
	};

	handleImageChange = (e) => {
		const newImage = e.target.files[0];
		if (this.validateFileExtension(newImage)) {
			this.setState({ src: URL.createObjectURL(newImage) });
		}
	};

	render() {
		return (
			<div className="avatar">
				{this.state.error ? this.renderError() : null}
				<img src={this.state.src} alt="" className="avatar_img" />
				<label htmlFor="img-upload" className="avatar_input">
					Upload Image
				</label>
				<input
					id="img-upload"
					type="file"
					accept=".jpg,.jpeg,.svg,.png"
					name="file1"
					onChange={this.handleImageChange}
				/>
			</div>
		);
	}
}
