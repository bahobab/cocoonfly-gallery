import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
// import {Artists, Layout, Seo} from '../components';
import Gallery from '../components/gallery';
import Layout from '../components/layout';
import Seo from '../components/seo';

export const query = graphql`
  {
    artists: allStrapiArtist {
      nodes {
        id
        name
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
      <Seo title="cocoonfly.com gallery" />
      <Gallery artists={artists} />
    </Layout>
  );
}

export default GalleryPage;
