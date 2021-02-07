import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Banner from "../components/Banner";

const RSVP = _ => {
	return (
		<Layout pageName="RSVP">
			<SEO title="RSVP"/>
			<div className="bannerContainer">
				<Banner bannerSrc="bannerRSVP" />
			</div>

		</Layout>
	)
};

export default RSVP;