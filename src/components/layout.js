import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

import favicon from "../images/favicon.png";

import Header from "./header";

import "../less/style.less";

const Layout = ({ children, pageName }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <Helmet>
                <link rel="icon" href={favicon} />
            </Helmet>
            <div className="pageContainer" data-page-id={pageName}>
                <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
                <div className="content">{children}</div>
            </div>
        </>
    );
};

export default Layout;
