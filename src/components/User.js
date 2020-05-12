import React from 'react';
import Info from './Info';
import { Helmet } from 'react-helmet';

const TITLE = 'React Demo | User';

export default function (props) {
	return (
		<div>
			<Helmet>
				<title>{TITLE}</title>
			</Helmet>
			<h1> The User page!</h1>
			<h2> This page uses a component called "Info"</h2>
			<Info />
		</div>
	);
}
