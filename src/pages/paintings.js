import React from 'react';

// import {Artists, Layout, Seo} from '../components';
import Paintings from '../components/paintings';
import Layout from '../components/layout';
import Seo from '../components/seo';

function PaintingsPage(params) {
  return (
    <Layout>
      <Seo />
      <Paintings />
    </Layout>
  );
}

export default PaintingsPage;