import React from "react";
import { Message, MessageContent, Header } from "semantic-ui-react";

import Carousel, { photoMapper } from './carousel/carousel';

function Gallery({ images }) {
  // console.log(">>>nodes:", images);
  const photos = images.map(image => (
    <figure key={image.node.id}>
      <img
        src={image.node.secure_url}
        alt="gallery sample"
        style={{ width: "100%" }}
      />
      <figcaption>Gallery Sample Image</figcaption>
    </figure>
  ));

  return (
    <Message>
      <MessageContent>{photos}</MessageContent>
    </Message>
  );
}

export default Gallery;
