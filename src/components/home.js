import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {
  Grid,
  Header,
  Message,
  MessageHeader,
  MessageContent,
  Segment,
} from 'semantic-ui-react';

import Hero from './hero';
import Events from './events';
import Artists from './artists';
import Gallery from './gallery';

import "./home.scss";

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

    gallery: allCloudinaryMedia {
      edges {
        node {
          id
          secure_url
          resource_type
        }
      }
    }
  }
`;

function Home() {
  const data = useStaticQuery(query);
  return (
    <Grid style={{ maxWidth: '100vw' }}>
      <Hero />
      <Segment>
        <Message>
          <MessageHeader>
            <Header
              as="h2"
              id="info"
              style={{
                backgroundColor: 'teal',
                color: '#ffffff',
                padding: '5px 0',
                textAlign: 'center',
                borderRadius: '3px',
              }}
            >
              Who we are
            </Header>
          </MessageHeader>
          <MessageContent style={{ marginTop: "10px" }}>
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

      <Segment className="homeSection">
        <Header
          as="h2"
          id="info"
          style={{
            backgroundColor: 'teal',
            color: '#ffffff',
            padding: '5px 0',
            textAlign: 'center',
            borderRadius: '3px',
          }}
        >
          Cocoonfly Latest Events
        </Header>
        <Events events={data.events.nodes} />
      </Segment>

      <Segment className="homeSection">
        <Header
          as="h2"
          id="artists"
          style={{
            backgroundColor: "teal",
            color: "#ffffff",
            padding: "5px 0",
            textAlign: "center",
            borderRadius: "3px",
          }}
        >
          Cocoonfly Featured Artists
        </Header>
        <Artists artists={data.artists.nodes} />
      </Segment>

      <Segment className="homeSection">
        <Header
          as="h2"
          id="gallery"
          style={{
            backgroundColor: "teal",
            color: "#ffffff",
            padding: "5px 0",
            textAlign: "center",
            borderRadius: "3px",
          }}
        >
          Sample Gallery Work
        </Header>
        <Gallery images={data.gallery.edges} />
      </Segment>
    </Grid>
  );
}

export default Home;
