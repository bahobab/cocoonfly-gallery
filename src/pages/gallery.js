import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Header, Segment } from 'semantic-ui-react';
// import {Artists, Layout, Seo} from '../components';
import Layout from '../components/layout';
import Gallery from '../components/gallery';
// eslint-disable-next-line import/no-named-as-default-member
import SEO from '../components/seo';

export const query = graphql`
  {
    artists: allStrapiArtist {
      nodes {
        id
        name
        slug
        artistImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        works: art_items {
          category
          description
          imgUrl {
            childImageSharp {
              fixed(height: 480) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
          title
          forSale
        }
      }
    }
  }
`;

function GalleryPage() {
  const data = useStaticQuery(query);
  const artists = data.artists.nodes;
  return (
    <Layout>
      <SEO title="cocoonfly.com gallery" />
      <Segment style={{ marginTop: '45px' }}>
        <Header
          as="h1"
          id="gallery"
          style={{
            backgroundColor: 'teal',
            color: '#ffffff',
            padding: '5px 0',
            marginTop: '12px',
            textAlign: 'center',
            borderRadius: '3px',
          }}
        >
          Full Cocoonfly Gallery
        </Header>
        <Gallery artists={artists} />
      </Segment>
    </Layout>
  );
}

export default GalleryPage;
