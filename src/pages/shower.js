import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout"

import CircleImg from "../components/CircleImg";

const Shower = _ => {
		return (
				<Layout pageName="Shower">
						<SEO title="Shower" />
						<div className="wrapper">
								<CircleImg imgName="shower" />
								Shower
						</div>
				</Layout>
		)
};

export default Shower;