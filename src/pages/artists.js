import React, { Suspense } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Header, Segment } from 'semantic-ui-react';

import Layout from '../components/layout';
import Seo from '../components/seo';

const Artists = React.lazy(() => import('../components/artists'));

export const query = graphql`
  {
    artists: allStrapiArtist {
      nodes {
        featured
        name
        slug
        bio
        artistImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

function ArtistsPage() {
  const data = useStaticQuery(query);
  return (
    <Layout>
      <Seo title="cocoonfly.com artists" />
      <Segment style={{ marginTop: '45px' }}>
        <Header
          as="h1"
          content="All Cocoonfly Artists"
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
          <Artists artists={data.artists.nodes} />
        </Suspense>
      </Segment>
    </Layout>
  );
}

export default ArtistsPage;
