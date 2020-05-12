import React from 'react';
import { Helmet } from 'react-helmet';

const TITLE = 'React Demo | About';

export default function (props) {
	return (
		<div>
			<Helmet>
				<title>{TITLE}</title>
			</Helmet>
			<h1>This is an about page!</h1>
			<h3>Welcome to a React App</h3>
			<a
				className='App-link'
				href='https://reactjs.org'
				target='_blank'
				rel='noopener noreferrer'
			>
				Learn React
			</a>
		</div>
	);
}
