import React from "react";
import { Link } from 'gatsby';
// import {Image } from 'gatsby-image';
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

function Event({ event }) {
  const {
 title, date, location, slug, description, } = event;

  return (
    <Message>
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
      <Segment>Carousell goes here</Segment>
    </Message>
  );
}

export default Event;
