import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Image } from "gatsby-image";
import {
  Container,
  Grid,
  Header,
  Message,
  MessageHeader,
  MessageContent,
  Segment,
} from "semantic-ui-react";

import Hero from "./hero";
import Events from "./events";
import Artists from "./artists";
import Gallery from "./gallery";

export const query = graphql`
  {
    events: allStrapiEvent(filter: { featured: { eq: true } }) {
      nodes {
        description
        date
        location
        title
        slug
        featured
        id
        media {
          featured
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

    artists: allStrapiArtist {
      nodes {
        featured
        name
        slug
        bio
        artistImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

function Home() {
  const data = useStaticQuery(query);
  return (
    <Grid style={{ maxWidth: "100vw" }}>
      <Hero />
      <Segment>
        <Message>
          <MessageHeader>
            <Header as="h2" id="info">
              Who we are
            </Header>
          </MessageHeader>
          <MessageContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </MessageContent>
        </Message>
      </Segment>

      <Segment style={{ width: "100%" }}>
        <Header as="h2" id="info">
          Cocoonfly Latest Events
        </Header>
        <Events events={data.events.nodes} />
      </Segment>

      <Segment style={{ width: "100%" }}>
        <Header as="h2" id="artists">
          Cocoonfly Featured Artists
        </Header>
        <Artists artists={data.artists.nodes} />
      </Segment>

      <Segment style={{ width: "100%" }}>
        <Header as="h2" id="gallery">
          Sample Gallery Work
        </Header>
        <Gallery />
      </Segment>
    </Grid>
  );
}

export default Home;
