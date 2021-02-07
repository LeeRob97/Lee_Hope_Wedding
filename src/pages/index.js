import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Banner from "../components/Banner";

const IndexPage = () => (
    <Layout pageName="index">
        <SEO title="Home" />
        <Banner bannerSrc="bannerHome" />
    </Layout>
);

export default IndexPage;
