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
							href="https://www.amazon.com/wedding/registry/Y11OFLDLTFFS?ref=wr_search_page_result_2"
							target="_blank"
							rel="noopener noreferrer"
						>
							Amazon
						</a>
						<a
							className="registry"
							href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/549897325?selectedRLVFilters=_recommended/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Bed Bath & Beyond
						</a>
						<a 
							className="registry" 
							href="https://www.walmart.com/lists/view-wedding-registry-items?id=c06c4350-1e45-4b4f-9969-7a9f54ac473f"
							target="_blank"
							rel="noopener noreferrer"
						>
							Walmart
						</a>
					</div>
				</div>
			</div>
		</Layout>
	)
};

export default Registry;