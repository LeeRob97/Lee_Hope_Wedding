import React from "react";
import { useStaticQuery, graphql } from "gatsby";

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
        <div className="pageContainer" data-page-id={pageName}>
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
            <div className="content">{children}</div>
        </div>
    );
};

export default Layout;
