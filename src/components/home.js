import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import {
  Button,
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

import './home.scss';

export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "Sky-is-the-limit.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }

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

    galleryArtists: allStrapiArtist(
      filter: { art_items: { elemMatch: { featured: { eq: true } } } }
    ) {
      nodes {
        id
        name
        slug
        artistImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        works: art_items {
          category
          description
          imgUrl {
            childImageSharp {
              fixed(width: 960) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          title
          forSale
          featured
        }
      }
    }
  }
`;

// gallery: allCloudinaryMedia {
//   edges {
//     node {
//       id
//       secure_url
//       resource_type
//     }
//   }
// }

function Home() {
  const data = useStaticQuery(query);
  const galleryArtists = data.galleryArtists.nodes;
  return (
    <Grid style={{ maxWidth: '100vw' }}>
      <Hero heroImage={data.heroImage.childImageSharp.fluid} />
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
          Who we are
        </Header>
        <Message>
          <MessageContent style={{ marginTop: '10px' }}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </MessageContent>
        </Message>
      </Segment>

      <Segment style={{ padding: 'auto' }} className="homeSection">
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
        <Button
          as={Link}
          to="/events"
          primary
          style={{ marginTop: '12px' }}
        >
          See All Events
        </Button>
      </Segment>

      <Segment className="homeSection">
        <Header
          as="h2"
          id="artists"
          style={{
            backgroundColor: 'teal',
            color: '#ffffff',
            padding: '5px 0',
            textAlign: 'center',
            borderRadius: '3px',
          }}
        >
          Cocoonfly Featured Artists
        </Header>
        <Artists artists={galleryArtists} />
        <Button
          as={Link}
          to="/artists"
          primary
          style={{ marginTop: '12px' }}
        >
          See All Artists
        </Button>
      </Segment>

      <Segment className="homeSection">
        <Header
          as="h2"
          id="gallery"
          style={{
            backgroundColor: 'teal',
            color: '#ffffff',
            padding: '5px 0',
            textAlign: 'center',
            borderRadius: '3px',
          }}
        >
          Sample Gallery Work
        </Header>
        <Gallery artists={galleryArtists} />
        <Button
          as={Link}
          to="/gallery"
          primary
          style={{ marginTop: '12px' }}
        >
          See Full Gallery
        </Button>
      </Segment>
    </Grid>
  );
}

export default Home;
