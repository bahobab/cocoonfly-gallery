import React, { Suspense } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Header, Segment } from 'semantic-ui-react';

import Layout from '../components/layout';
import Seo from '../components/seo';

const Events = React.lazy(() => import('../components/events'));

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
        <Suspense fallback={<div>...loading</div>}>
          <Events events={data.events.nodes} />
        </Suspense>
      </Segment>
    </Layout>
  );
}

export default EventsPage;
