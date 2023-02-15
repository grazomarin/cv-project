import React, { useRef } from 'react';
import logo from './images/logo.svg';
import ReactToPrint from 'react-to-print';
import CV from './components/CV';
import './styles/App.scss';

const App = () => {
	const componentRef = useRef();

	return (
		<>
			<div className="header">
				<img className="logo" src={logo} alt="" />
				<ReactToPrint
					trigger={() => (
						<button className="download">Download as PDF</button>
					)}
					content={() => componentRef.current}
					documentTitle="myCV"
				/>
			</div>
			<CV ref={componentRef} />
		</>
	);
};

export default App;
