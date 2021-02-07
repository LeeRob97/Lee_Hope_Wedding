module.exports = {
    siteMetadata: {
        title: `Lee & Hope Wedding`,
        description: `Lee and Hope Wedding Details`,
        author: `Lee Robertson`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-less`,
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Libre Caslon Display\:500,600,700,normal,lighter,bold,bolder,italic`,
                    `Dancing Script\:500,600,700,normal,lighter,bold,bolder,italic`
                ],
            },
        },
    ],
};
