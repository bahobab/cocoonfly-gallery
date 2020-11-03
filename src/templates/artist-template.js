import React from "react";
import { graphql } from "gatsby";
import { Container, Segment, Card } from "semantic-ui-react";

import Seo from '../components/seo';
import Layout from '../components/layout';
import Carousel, { photoMapper } from '../components/carousel/carousel.js';

export const query = graphql`
  {
    artist: strapiArtist {
      bio
      name
      artistImg {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      works: art_items {
        description
        id
        title
        imgUrl {
          childImageSharp {
            fixed(width: 960) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;

function artistPage({ data }) {
  const { name, bio, works } = data.artist;
  const convertedWorks = works.map(work => {
    // rename imgUrl to mediaUrl for photoMapper
    work = { ...work, mediaUrl: work.imgUrl };
    delete work.imgUrl;
    return work;
  });

  const photos = photoMapper(convertedWorks);

  return (
    <Layout>
      <Seo title="Single Artist" />
      <Container>
        <Card>
          <Card.Content textAlign="center">
            <Card.Header textAlign="center">{name}</Card.Header>
            <p>{bio}</p>
          </Card.Content>
        </Card>
        <Segment>
          <Carousel photos={photos} />
        </Segment>
      </Container>
    </Layout>
  );
}

export default artistPage;
