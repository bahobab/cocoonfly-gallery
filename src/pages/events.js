import React from 'react';

// import {Artists, Layout, Seo} from '../components';
import Events from '../components/events';
import Layout from '../components/layout';
import Seo from '../components/seo';

function EventsPage(params) {
  return (
    <Layout>
      <Seo />
      <Events />
    </Layout>
  );
}

export default EventsPage;