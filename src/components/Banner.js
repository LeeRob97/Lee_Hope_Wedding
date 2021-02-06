import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Banner = ({ bannerSrc }) => {
    const {allFile: banners} = useStaticQuery(graphql`
        {
            allFile(filter: {relativeDirectory: {eq: "Banners"}}) {
                edges {
                    node {
                        name
                        id
                        extension
                        childImageSharp {
                            fluid(maxWidth: 2066) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    `);

    const matchingBanner = banners.edges.find(({node}) => node.name === bannerSrc);

    return (
        <Img
            className="banner"
            fluid={matchingBanner.node.childImageSharp.fluid}
            alt="banner"
        />
    );
};

export default Banner;
