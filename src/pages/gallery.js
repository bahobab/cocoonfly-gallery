import React from "react";

// import {Artists, Layout, Seo} from '../components';
import Gallery from "../components/gallery";
import Layout from "../components/layout";
import Seo from "../components/seo";

function GalleryPage(params) {
  return (
    <Layout>
      <Seo title="cocoonfly.com gallery" />
      <Gallery />
    </Layout>
  );
}

export default GalleryPage;
