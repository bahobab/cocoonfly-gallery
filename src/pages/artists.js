import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { Header } from "semantic-ui-react";

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
      <Header
        as="h1"
        content="All Cocoonfly Artists"
        style={{
          textAlign: 'center',
          color: '#fff',
          backgroundColor: 'teal',
          marginTop: '12px',
          borderRadius: '3px',
        }}
      />
      <Artists artists={data.artists.nodes} />
    </Layout>
  );
}

export default ArtistsPage;
