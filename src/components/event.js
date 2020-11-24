import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'gatsby';
import { Header, Container, Card } from 'semantic-ui-react';
import Carousel, { photoMapper } from './carousel/carousel';

function Event({ event }) {
  const { title, date, location, slug, description, media } = event;

  const images = photoMapper(media);

  return (
    <Container style={{ marginLeft: '0', marginRight: '0' }}>
      {/* <Segment textAlign='center' style={{ width: '100%', textAlign: 'center' }}> */}
      <Card style={{ width: 'auto' }}>
        <Card.Content>
          <Card.Header>
            <Header as="h3" textAlign="center">
              <Link to={`/events/${slug}`}>
                {title}
                &nbsp;-&nbsp;
                {date}
              </Link>
            </Header>
          </Card.Header>
          <Card.Content textAlign="center">
            @&nbsp;
            {location}
          </Card.Content>
        </Card.Content>
        <Card.Content textAlign="center">{description}</Card.Content>
        <Card.Content>
          <Carousel photos={images} />
        </Card.Content>
      </Card>
      {/* </Segment> */}
    </Container>
  );
}

Event.propTypes = {
  event: propTypes.object.isRequired,
};
export default Event;
