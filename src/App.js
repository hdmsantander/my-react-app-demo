import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import User from './components/User';
import Home from './components/Home';
import About from './components/About';

class App extends Component {
	render() {
		return (
			<Router>
				<div className='App'>
					<header className='App-header'>
						<div>
							<div>
								<Link to='/' className='App-link'>
									Home
								</Link>
								<Link to='/about' className='App-link'>
									About
								</Link>
								<Link to='/user' className='App-link'>
									User
								</Link>
							</div>
							<img src={logo} className='App-logo' alt='logo' />
							<Route exact path='/' component={Home} />
							<Route path='/about' component={About} />
							<Route path='/user' component={User} />
						</div>
					</header>
				</div>
			</Router>
		);
	}
}

export default App;
