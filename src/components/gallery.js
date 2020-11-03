import React from "react";
import Image from 'gatsby-image';
import { Container, Segment } from "semantic-ui-react";

import Carousel, { photoMapper } from './carousel/carousel';

function Gallery({ artists }) {
  console.log(">>>nodes:", artists);

  const artistGallery = artists.map(artist => {
    const works = artist.works.map(work => {
      const photos = { ...work, mediaUrl: work.imgUrl };
      delete photos.imgUrl;
      return photos;
    });

    const photos = photoMapper(works);

    return (
      <>
        <figure key={artist.id}>
          <Image
            key={artist.id}
            fluid={artist.artistImg.childImageSharp.fluid}
            // src={image.node.secure_url}
            // alt="gallery sample"
            // style={{ width: "100%" }}
          />
          <figcaption>{artist.name}</figcaption>
        </figure>
        <Segment>
          <Carousel photos={photos} />
        </Segment>
      </>
    );
  });

  return <Container>{artistGallery}</Container>;
}

export default Gallery;
