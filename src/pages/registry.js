import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Banner from "../components/Banner";

const Registry = _ => {
	return (
		<Layout pageName="Registry">
			<SEO title="Registry" />
			<div className="bannerContainer">
				<Banner bannerSrc="bannerRegistry" />
			</div>
			<div className="wrapper">
				<div className="header">
					<div className="larger">
						Registry
					</div>
				</div>
				<div className="details">
					<div className="message">
						Please know that your presence at our wedding is present enough! However,
						for friends and family who have been asking for gift ideas, we've created some
						online registries here:
					</div>
					<div className="registries">
						<a 
							className="registry" 
							href="https://walmart.com" 
							target="_blank"
							rel="noopener noreferrer"
						>
							Walmart
						</a>
						<a 
							className="registry" 
							href="https://www.bedbathandbeyond.com/" 
							target="_blank"
							rel="noopener noreferrer"
						>
							Bed Bath & Beyond
						</a>
					</div>
				</div>
			</div>
			
		</Layout>
	)
};

export default Registry;