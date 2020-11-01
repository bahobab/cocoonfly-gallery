/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

// create pagges dynamically

const path = require('path');

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions;
  // (filter: {featured: {eq: true}})
  const results = await graphql(`
    query GetEvents {
    events:allStrapiEvent {
      nodes {
        slug
      }
    }
  }
 `);
 
 results.data.events.nodes.forEach(event => {
   createPage({
     path: `/events/${event.slug}`,
     component: path.resolve(`src/templates/event-template.js`),
     context: {
       slug: event.slug
     }
   });
 });
}