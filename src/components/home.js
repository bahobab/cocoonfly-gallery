import React from 'react';
import {Container, } from 'semantic-ui-react';

import Hero from '../components/hero'

function Home() {
  return (
    <>
      <Hero />
      <h2 id='info'>Who we are</h2>
      <h2 id='events'>Events Section</h2>
      <h2 id='artists'>Artists Section</h2>
      <h2 id='gallery'>Gallery Section</h2>
    </>
    )
}

export default Home;