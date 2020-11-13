import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import { Container, Button, Message } from 'semantic-ui-react';

import './hero.scss';

function Hero({ heroImage }) {
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
      <Image fluid={heroImage} alt="hero" />
    </Container>
  );
}

Hero.propTypes = {
  heroImage: PropTypes.object.isRequired,
};

export default Hero;
