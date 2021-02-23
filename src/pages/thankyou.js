import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import {Link} from "gatsby";

const ThankYou = _ => {
	return (
		<Layout pageName="ThankYou">
			<SEO title="ThankYou"/>
			<div className="wrapper">
				<div className="container">
					<div id="message">
						Thank you for submitting your RSVP!
					</div>
					<Link className="button" to="/">Return Home</Link>
				</div>
			</div>
		</Layout>
	)
};

export default ThankYou;