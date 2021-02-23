import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Banner from "../components/Banner";
import RSVPForm from "../components/RSVPForm";

const RSVP = _ => {
	return (
		<Layout pageName="RSVP">
			<SEO title="RSVP"/>
			<div className="bannerContainer">
				<Banner bannerSrc="bannerRSVP" />
			</div>
			<div className="wrapper">
				<div className="header">
					<div className="larger">
						RSVP
					</div>
					<div className="smaller">
						Please let us know if you will join us at our wedding.
					</div>
				</div>
				<div className="details">
					<RSVPForm />
				</div>
			</div>

		</Layout>
	)
};

export default RSVP;