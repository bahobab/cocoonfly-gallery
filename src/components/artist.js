import React from "react";
import { Link } from "gatsby";
import { Image } from "gatsby-image";
import {
  Card,
  Header,
  Message,
  MessageContent,
  MessageHeader,
} from "semantic-ui-react";

import "./artist.scss";

function Artist({ artist }) {
  const { name, bio, slug } = artist;
  const artistLink = <Link to={`/artists/${slug}`}>See artist's work</Link>;
  // painting image array
  return (
    <Message style={{ width: '100%' }}>
      <MessageHeader>
        <Header as="h3">{name}</Header>
      </MessageHeader>
      <MessageContent>
        {/* {bio} */}
        <Card
          image="https://res.cloudinary.com/krikitue/image/upload/v1604162578/user_vzmyfn.svg"
          // header={name}
          description={bio}
          extra={artistLink}
          style={{ width: '100%', textAlign: "center" }}
        />
      </MessageContent>
    </Message>
  );
}

export default Artist;
