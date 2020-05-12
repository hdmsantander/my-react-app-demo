import React from 'react';
import { Helmet } from 'react-helmet';

const TITLE = 'React Demo | Home';

export default function (props) {
	return (
		<div>
			<Helmet>
				<title>{TITLE}</title>
			</Helmet>
			<h1>This is the home page!</h1>
			<h3>This is the main page of this web app</h3>
			<p>
				You can browse some different pages in this app following the links
				above.
			</p>
		</div>
	);
}
