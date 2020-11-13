import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Header, Segment } from 'semantic-ui-react';

import Layout from '../components/layout';
// eslint-disable-next-line import/no-named-as-default-member
import Seo from '../components/seo';
import Artists from '../components/artists';

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
              ...GatsbyImageSharpFluid_withWebp
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
        <Artists artists={data.artists.nodes} />
      </Segment>
    </Layout>
  );
}

export default ArtistsPage;
