/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

// create pagges dynamically

const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const results = await graphql(`
    query GetEvents {
      events: allStrapiEvent {
        nodes {
          slug
        }
      }
    }
  `);

  results.data.events.nodes.forEach((event) => {
    createPage({
      path: `/events/${event.slug}`,
      component: path.resolve('src/templates/event-template.js'),
      context: {
        slug: event.slug,
      },
    });
  });

  const artistResults = await graphql(`
    query GetArtists {
      artists: allStrapiArtist {
        nodes {
          slug
        }
      }
    }
  `);

  artistResults.data.artists.nodes.forEach((artist) => {
    createPage({
      path: `/artists/${artist.slug}`,
      component: path.resolve('src/templates/artist-template.js'),
      context: {
        slug: artist.slug,
      },
    });
  });
};
