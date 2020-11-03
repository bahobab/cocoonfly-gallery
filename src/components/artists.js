import React from "react";
import { graphql } from "gatsby";
import { Container, Header } from "semantic-ui-react";

import Artist from "./artist";

function Artists({ artists }) {
  return artists.map(artist => <Artist key={artist.slug} artist={artist} />);
}

export default Artists;
