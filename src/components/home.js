import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import {
  Button,
  Grid,
  Header,
  Message,
  MessageContent,
  Segment,
} from 'semantic-ui-react';

import Hero from './hero';
import Events from './events';
import Artists from './artists';
import Gallery from './gallery';

import './home.scss';

// hero ...GatsbyImageSharpFluid
// event fixed(width: 960) {
// ...GatsbyImageSharpFixed
// }

// artist childImageSharp {
// fluid {
// ...GatsbyImageSharpFluid
// }
// }

export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "Sky-is-the-limit.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    events: allStrapiEvent(
      filter: {
        featured: { eq: true }
        media: {
          mediaList: { elemMatch: { featured: { eq: true } } }
        }
      }
    ) {
      nodes {
        description
        date
        location
        title
        slug
        featured
        id
        media {
          mediaList {
            featured
            mediaUrl {
              childImageSharp {
                fixed(height: 480) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
            id
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
              ...GatsbyImageSharpFluid_withWebp
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
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        works: art_items {
          category
          description
          imgUrl {
            childImageSharp {
              fixed(height: 480) {
                ...GatsbyImageSharpFixed_withWebp
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

function Home() {
  const data = useStaticQuery(query);
  const galleryArtists = data.galleryArtists.nodes;
  const events = data.events.nodes;
  const filteredEvents = events.filter(
    (event) => event.featured === true,
  );
  const featuredEvents = filteredEvents.map((event) => {
    let featuredImages = [];
    featuredImages = event.media.mediaList.filter(
      (media) => media.featured === true,
    );

    return { ...event, media: featuredImages };
  });

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
        <Events events={featuredEvents} />
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
