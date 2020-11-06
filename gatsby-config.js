require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Cocoonfly Gallery',
    description:
      'Cocoonfly Gallery is a collection of art pieces from great Nigerian (mostly) painters artists.',
    author: '@khooph',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-cloudinary',
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: 'image',
        prefix: 'cocoonfly/gallery/',
        context: true,
        tags: true,
        maxResults: 5,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'cocoonfly-gallery',
        short_name: 'gallery',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/cocoonfly-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.API_URL || 'http://localhost:1337',
        queryLimit: 1000,
        contentTypes: ['artist', 'art-item', 'event', 'tag'],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
