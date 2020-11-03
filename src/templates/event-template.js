import React from 'react';
import { graphql } from 'gatsby';
import { Container, Segment, Card } from "semantic-ui-react";

import Layout from "../components/layout";
import Seo from '../components/seo';
import Carousel, { photoMapper } from '../components/carousel/carousel.js';

export const query = graphql`
  query GetSingleEvent($slug: String) {
    event: strapiEvent(slug: { eq: $slug }) {
      title
      date(formatString: "")
      description
      location
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
`;

function eventTemplate({ data }) {
  const {
 date, description, location, media, title, } = data.event;
  const photos = photoMapper(media);
  return (
    <Layout>
      <Seo title="Single Event" />
      <Container>
        <Card>
          <Card.Content style={{ textAlign: "center" }}>
            <Card.Header style={{ textAlign: "center" }}>{title}</Card.Header>
            <p>{date}</p>
            <p>{location}</p>
            <p>{description}</p>
          </Card.Content>
          {/* <Card.Content> */}
        </Card>
        <Segment>
          <Carousel photos={photos} />
        </Segment>
        {/* </Card.Content> */}
      </Container>
    </Layout>
  );
}

export default eventTemplate;
