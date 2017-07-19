import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Projects } from './components';
import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div className='container'>
					<Route exact path='/' component={Home} />
					<Route exact path='/projects/:prjId' component={Projects} />
				</div>
			</Router>
		);
	}
}

export default App;
