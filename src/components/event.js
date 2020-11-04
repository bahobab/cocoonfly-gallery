import React from 'react';
import propTypes, {object} from 'prop-types';
import { Link } from 'gatsby';
// import Image from 'gatsby-image';
import {
 Header, Container, Segment, Card 
} from 'semantic-ui-react';
import Carousel, { photoMapper } from './carousel/carousel';

function Event({ event }) {
  const {
 title, date, location, slug, description, media, } = event;

  const images = photoMapper(media);

  return (
    <Container style={{ width: '100vw'}}>
      {/* <Segment textAlign='center' style={{ width: '100%', textAlign: 'center' }}> */}
        <Card style={{ width: '100%' }}>
          <Card.Content style={{ maxWidth: '100%' }}>
            <Card.Header>
              <Header as="h3" textAlign='center'>
                <Link to={`/events/${slug}`}>
                  {title} -{date}
                </Link>
              </Header>
            </Card.Header>
            <Card.Content textAlign='center'>
@
{location}
            </Card.Content>
          </Card.Content>
          <Card.Content textAlign='center'>{description}</Card.Content>
        </Card>
        <Segment>
          <Carousel photos={images} style={{ width: '100%' }} />
        </Segment>
      {/* </Segment> */}
    </Container>
  );
}

Event.propTypes = {
  event: propTypes.object.isRequired,
};
export default Event;
