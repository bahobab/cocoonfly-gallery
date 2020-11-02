import React from "react";
import { Link } from 'gatsby';
import Image from "gatsby-image";
import {
  Container,
  Card,
  CardContent,
  CardHeader,
  Header,
  Message,
  MessageContent,
  MessageHeader,
  Segment,
} from 'semantic-ui-react';

import Carousel, { photoMapper } from "./carousel/carousel";

function Event({ event }) {
  const {
 title, date, location, slug, description, media, } = event;
  // const images = media.map((image, index) => (
  //   <Image key={index} fluid={image.mediaUrl.childImageSharp.fluid} />
  // ));

  // const images = media.map(image => image.mediaUrl.childImageSharp.fixed);

  const images = photoMapper(media);
  return (
    <Message style={{ width: '100%' }}>
      <MessageHeader>
        <Header as="h3" textAlign="center">
          <Link to={`/events/${slug}`}>
            {title}
{' '}
-{date}
          </Link>
        </Header>
        <Header as="h4" textAlign="center">
          @ 
{' '}
{location}
        </Header>
      </MessageHeader>
      <MessageContent>{description}</MessageContent>
      <Segment>
        <Carousel photos={images} />
      </Segment>
      {/* <Segment>{images}</Segment> */}
    </Message>
  );
}

export default Event;
