import React from 'react';
import PropTypes, { object } from 'prop-types';
import { graphql } from 'gatsby';
import { Container, Header, Segment, Card } from 'semantic-ui-react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Carousel, {
  photoMapper,
} from '../components/carousel/carousel.js';

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
  const { date, description, location, media, title } = data.event;
  const photos = photoMapper(media);
  return (
    <Layout>
      <Seo title="Single Event" />
      <Container style={{ width: '100vw' }}>
        <Segment style={{ width: '100%', marginTop: '45px' }}>
          <Header
            as="h1"
            content="Cocoonfly Event"
            style={{
              textAlign: 'center',
              color: '#fff',
              backgroundColor: 'teal',
              padding: '5px 0',
              marginTop: '12px',
              borderRadius: '3px',
            }}
          />
          <Card style={{ width: '100%' }}>
            <Card.Content style={{ textAlign: 'center' }}>
              <Card.Header style={{ textAlign: 'center' }}>
                {title}
              </Card.Header>
              <p>{date}</p>
              <p>{location}</p>
              <p>{description}</p>
            </Card.Content>
            {/* <Card.Content> */}
          </Card>
          <Segment>
            <Carousel photos={photos} />
          </Segment>
        </Segment>
        {/* </Card.Content> */}
      </Container>
    </Layout>
  );
}

eventTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default eventTemplate;
