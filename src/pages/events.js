import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Header, Segment } from 'semantic-ui-react';

import Events from '../components/events';
import Layout from '../components/layout';
import Seo from '../components/seo';

export const query = graphql`
  {
    events: allStrapiEvent {
      nodes {
        date(formatString: "")
        id
        description
        title
        location
        slug
        media {
          mediaUrl {
            childImageSharp {
              fixed(width: 960) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`;

function EventsPage() {
  const data = useStaticQuery(query);
  return (
    <Layout>
      <Seo title="cocoonfly.com artists" />
      <Segment>
      <Header
        as="h1"
        content="All Cocoonfly Events"
        style={{
          textAlign: 'center',
          color: '#fff',
          backgroundColor: 'teal',
          padding: '5px 0',
          marginTop: '12px',
          borderRadius: '3px',
        }}
      />
      <Events events={data.events.nodes} />
      </Segment>
    </Layout>
  );
}

export default EventsPage;
