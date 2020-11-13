import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import { Card, Container, Header, Segment } from 'semantic-ui-react';

function Artist({ artist }) {
  const { name, slug } = artist;
  const artistLink = (
    <Link to={`/artists/${slug}`}>
      See&nbsp;
      {name}
      &apos; work
    </Link>
  );
  return (
    <Container
      textAlign="center"
      style={{ width: '100%', marginBottom: '20px' }}
    >
      {/* <Segment style={{ width: '100%' }}> */}
      <Card style={{ width: '100%' }}>
        <Card.Content>
          <Card.Header>
            <Header as="h3">{name}</Header>
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <figure>
            <Image fluid={artist.artistImg.childImageSharp.fluid} />
          </figure>
        </Card.Content>
        <Card.Content>{artist.bio}</Card.Content>
        <Card.Content>{artistLink}</Card.Content>
      </Card>
      {/* </Segment> */}
    </Container>
  );
}

Artist.propTypes = {
  artist: propTypes.object.isRequired,
};

export default Artist;
