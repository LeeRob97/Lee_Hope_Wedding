import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import {Link} from "gatsby";

const Error = _ => {
	return (
		<Layout pageName="Error">
			<SEO title="Error"/>
			<div className="wrapper">
				<div className="container">
					<div id="message">
						There was an error submitting your RSVP!
					</div>
					<div className="navigateOptions">
						<Link className="button" to="/">Return Home</Link>
						<Link className="button" to="/rsvp">Try Again</Link>
					</div>
				</div>
			</div>
		</Layout>
	)
};

export default Error;