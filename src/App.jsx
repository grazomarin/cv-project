import React, { Component } from 'react';
import logo from './images/logo.svg';
import ReactToPrint from 'react-to-print';
import CV from './components/CV';
import './styles/App.scss';

class App extends Component {
	render() {
		return (
			/* throws warning because react-to-print uses findDOMNode */
			<>
				<div className="header">
					<img className="logo" src={logo} alt="" />
					<ReactToPrint
						trigger={() => {
							return (
								<button
									className="download"
									onClick={this.printPdf}
								>
									Download as PDF
								</button>
							);
						}}
						content={() => this.componentRef}
						documentTitle="myCV"
					/>
				</div>
				<CV ref={(el) => (this.componentRef = el)} />
			</>
		);
	}
}

export default App;
