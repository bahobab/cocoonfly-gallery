import React from "react";
import {graphql} from 'gatsby';

// import {Artists, Layout, Seo} from '../components';
import Events from "../components/events";
import Layout from "../components/layout";
import Seo from "../components/seo";

export const query = graphql`
  {
    event: allStrapiEvent(filter: {}) {
      nodes {
        date(formatString: "")
        id
        description
        title
        location
        slug
      }
    }
  }
`;

function EventsPage({data}) {
  console.log('>>>>', data)
  const events = data.event.nodes;
  return (
    <Layout>
      <Seo title="cocoonfly.com events" />
      <h1>All Cocoonfly Events</h1>
      <Events events={events}/>
    </Layout>
  );
}

export default EventsPage;
