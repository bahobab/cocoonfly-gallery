import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Header, Segment } from 'semantic-ui-react';

import Events from '../components/events';
// eslint-disable-next-line import/no-named-as-default-member
import Layout from '../components/layout';
// eslint-disable-next-line import/no-named-as-default-member
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
          mediaList {
            featured
            mediaUrl {
              childImageSharp {
                fixed(height: 480) {
                  ...GatsbyImageSharpFixed_withWebp
                }
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
  const pageEvents = data.events.nodes.map((event) => ({
    ...event,
    media: [...event.media.mediaList],
  }));

  return (
    <Layout>
      <Seo title="cocoonfly.com artists" />
      <Segment style={{ marginTop: '45px' }}>
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
        <Events events={pageEvents} />
      </Segment>
    </Layout>
  );
}

export default EventsPage;
