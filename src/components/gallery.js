import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'gatsby';
// eslint-disable-next-line prettier/prettier
import { Container, Header, Card } from 'semantic-ui-react';

import Carousel, { photoMapper } from './carousel/carousel';

function Gallery({ artists }) {
  const artistGallery = artists.map((artist) => {
    const works = artist.works.map((work) => {
      const photos = { ...work, mediaUrl: work.imgUrl };
      delete photos.imgUrl;
      return photos;
    });

    const photos = photoMapper(works);

    return (
      <Card
        key={artist.slug}
        style={{ width: '100%', marginTop: '20px' }}
      >
        <Card.Content style={{ width: '100%' }}>
          <Card.Header>
            <Header textAlign="center">
              <Link to={`/artists/${artist.slug}`}>
                {artist.name}
              </Link>
            </Header>
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Carousel photos={photos} style={{ width: '100%' }} />
        </Card.Content>
      </Card>
    );
  });

  return (
    <Container style={{ width: '100vw', marginTop: '20px' }}>
      {artistGallery}
    </Container>
  );
}

Gallery.propTypes = {
  artists: propTypes.arrayOf(propTypes.shape).isRequired,
};

export default Gallery;
