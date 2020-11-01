import React from "react";

// import {Artists, Layout, Seo} from '../components';
import Artists from "../components/artists";
import Layout from "../components/layout";
import Seo from "../components/seo";

function ArtistsPage(params) {
  return (
    <Layout>
      <Seo title="cocoonfly.com artists" />
      <Artists />
    </Layout>
  );
}

export default ArtistsPage;
