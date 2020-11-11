import React, { Suspense } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Header, Segment } from 'semantic-ui-react';
// import {Artists, Layout, Seo} from '../components';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Gallery = React.lazy(() => import('../components/gallery'));

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
              ...GatsbyImageSharpFluid
            }
          }
        }
        works: art_items {
          category
          description
          imgUrl {
            childImageSharp {
              fixed(width: 960) {
                ...GatsbyImageSharpFixed
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
        <Suspense fallback={<div>...loading</div>}>
          <Gallery artists={artists} />
        </Suspense>
      </Segment>
    </Layout>
  );
}

export default GalleryPage;
