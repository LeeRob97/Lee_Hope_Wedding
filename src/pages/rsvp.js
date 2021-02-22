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
					<form
						id="rsvpForm"
						method="post"
						name="WeddingRSVP"
						data-netlify="true"
						netlify-honeypot="bot-field"
					>
						<input type="hidden" name="bot-field" />
						<input type="hidden" name="form-name" value="WeddingRSVP" />
						<div className="inputField">
							<label>First Name</label>
							<input name="First Name" type="text"/>
						</div>
						<div className="inputField">
							<label>Last Name</label>
							<input name="Last Name" type="text"/>
						</div>
						<div className="inputField">
							<label>Number of Guests</label>
							<input name="Number of Guests" type="number"/>
						</div>
						<div className="inputField">
							<label>Phone Number</label>
							<input name="phone" type="phone"/>
						</div>
						<div className="inputField">
							<label>Email (To be reached at for any changes)</label>
							<input name="email" type="email"/>
						</div>
						<div className="inputField">
							<input type="submit" value="RSVP"/>
						</div>
					</form>
				</div>
			</div>

		</Layout>
	)
};

export default RSVP;