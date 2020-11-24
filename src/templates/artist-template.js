import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Container, Header, Segment, Card } from 'semantic-ui-react';
import Seo from '../components/seo';
import Layout from '../components/layout';
import Carousel, {
  photoMapper,
  // eslint-disable-next-line import/extensions
} from '../components/carousel/carousel.js';

export const query = graphql`
  query artistPage($slug: String) {
    artist: strapiArtist(slug: { eq: $slug }) {
      bio
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
        description
        id
        title
        imgUrl {
          childImageSharp {
            fixed(height: 480) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    }
  }
`;

function artistPage({ data }) {
  const { name, bio, works } = data.artist;
  const convertedWorks = works.map((work) => {
    // rename imgUrl to mediaUrl for photoMapper
    work = { ...work, mediaUrl: work.imgUrl };
    delete work.imgUrl;
    return work;
  });

  const photos = photoMapper(convertedWorks);

  return (
    <Layout>
      <Seo title="Single Artist" />
      <Container style={{ width: '100%' }}>
        <Segment style={{ width: '100%', marginTop: '45px' }}>
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
            {name.split(' ')[0]}
            's Work
          </Header>
          <div
            style={{
              width: '100%',
              display: 'grid',
              // flexWrap: 'wrap',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(100px,300px) 1fr)',
              columnGap: '15px',
              // gridAutoFlow: 'auto',
            }}
          >
            <Card style={{ width: 'auto' }}>
              <Card.Content textAlign="center">
                <Card.Header textAlign="center">
                  <Header>{name}</Header>
                </Card.Header>
              </Card.Content>
              <Card.Content textAlign="center">
                <p className="artist-bio">{bio}</p>
              </Card.Content>
            </Card>
            <Segment>
              <Carousel photos={photos} />
            </Segment>
          </div>
        </Segment>
      </Container>
    </Layout>
  );
}

artistPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default artistPage;
