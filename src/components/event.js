import React from 'react';
import { Link } from "gatsby";
import Image from 'gatsby-image';
import {
  Header,
  Message,
  MessageContent,
  MessageHeader,
  Segment,
} from "semantic-ui-react";

import Carousel, { photoMapper } from './carousel/carousel';

function Event({ event }) {
  const { title, date, location, slug, description, media 
} = event;

  const images = photoMapper(media);
  return (
    <Message style={{ width: "100%" }}>
      <MessageHeader>
        <Header as="h3">
          <Link to={`/events/${slug}`}>
            {title} -{date}
          </Link>
        </Header>
        <Header as="h4">
@
{location}
        </Header>
      </MessageHeader>
      <MessageContent>{description}</MessageContent>
      <Segment>
        <Carousel photos={images} />
      </Segment>
    </Message>
  );
}

export default Event;
