import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Header, Segment } from 'semantic-ui-react';

import Artists from '../components/artists';
import Layout from '../components/layout';
import Seo from '../components/seo';

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
        <Artists artists={data.artists.nodes} />
      </Segment>
    </Layout>
  );
}

export default ArtistsPage;
