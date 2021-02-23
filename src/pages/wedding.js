import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Banner from "../components/Banner";

const Wedding = _ => {
	return (
		<Layout pageName="Wedding">
			<SEO title="Wedding" />
			<div className="bannerContainer">
				<Banner bannerSrc="bannerWedding" />
			</div>
			<div className="wrapper">
				<div className="header">
					<div className="larger">
						Wedding 
					</div>
					<div className="smaller">
						Ceremony and Celebration of
					</div>
					<div className="larger">
						Hope Wadsworth<br/>&<br/> Lee Robertson 
					</div>
				</div>
				<div className="details">
					<div className="info">06.05.21</div>
					<a className="info map" href="http://maps.google.com/?q=14860 FM 103, Nocona, TX 76255" target="_blank" rel="noopener noreferrer">Comanche Rose Ranch &bull; Nocona, TX &bull; 12 PM, Noon</a>
				</div>
			</div>
		</Layout>
	)
};

export default Wedding;