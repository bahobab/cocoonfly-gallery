import React from 'react';
import PropTypes, {object} from 'prop-types';
import Image from 'gatsby-image';
// import { Link } from 'gatsby';
import {
  Container,
  Dimmer,
  Button,
  Message,
} from 'semantic-ui-react';

import './hero.scss';

function Hero({heroImage}) {
  return (
    <Container className="heroSection" as="section">
      <div className="ccfMessage">
        <Message.Content
          className="heroMessage"
          content="qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt"
        />
      </div>
      <Button
        className="cta"
        as="a"
        href="#info"
        style={{ zIndex: '100' }}
      >
        Click Here
      </Button>
      {/* <Dimmer.Dimmable dimmed style={{ height: 'auto', maxHeight: '100vh', marginTop: '1px' }}> */}
        {/* <Dimmer simple style={{ opacity: '0.5' }} /> */}
        <Image
          // src="https://res.cloudinary.com/krikitue/image/upload/v1603897289/cocoonfly/Sky-is-the-limit_kmyack.jpg"
          // src={heroImage}
          fluid={heroImage}
          alt="hero"
        />
      {/* </Dimmer.Dimmable> */}
    </Container>
  );
}

Hero.propTypes = {
  heroImage: PropTypes.object.isRequired,
}

export default Hero;
