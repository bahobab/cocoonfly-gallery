import React from 'react';
import {Container, Grid} from 'semantic-ui-react';

import Hero from '../components/hero'
// import Events from '../components/events';
// import Artists from '../components/artists';
// import Gallery from '../components/'

function Home() {
  return (
    <Grid>
      <Hero />
      <h2 id='info'>Who we are</h2>
      <h2 id='events'>Events Section</h2>
      <h2 id='artists'>Artists Section</h2>
      <h2 id='gallery'>Gallery Section</h2>
    </Grid>
    )
}

export default Home;