import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout"

import Banner from "../components/Banner"
import { Link } from "gatsby";

const Shower = _ => {
	return (
		<Layout pageName="Shower">
			<SEO title="Shower" />
			<div className="bannerContainer">
				<Banner bannerSrc="bannerShower" />
			</div>
			<div className="wrapper">
				<div className="header">
					<div className="smaller">
						Please Join Us For Our
					</div>
					<div className="larger">
						Wedding Shower
					</div>
				</div>
				<div className="details">
					<div className="info">
						Saturday, April 17
					</div>
					<div className="info">
						Central Baptist Church
					</div>
					<div className="info">
						<a href="http://maps.google.com/?q=710 W Wise St, Bowie, TX 76230" target="_blank" rel="noopener noreferrer">710 W Wise St, Bowie, TX 76230</a>
					</div>
					<div className="info">
						<Link to="/registry">View Registry</Link>
					</div>
				</div>
			</div>
		</Layout>
	)
};

export default Shower;