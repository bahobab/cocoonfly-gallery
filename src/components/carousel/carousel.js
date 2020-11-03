import React, { useCallback, useState } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

function carousel({ photos }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const opelLightBox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  function closeModal() {
    setCurrentImage(0);
    setViewerIsOpen(false);
  }

  return (
    <div tyle={{ width: '100%' }}>
      <Gallery
        photos={photos}
        onClick={opelLightBox}
        tyle={{ width: "100%" }}
      />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeModal}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((photo) => ({
                ...photo,
                srcset: photo.srcset,
                caption: photo.title || "caption",
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default carousel;

// Greatest Common Divisor
function gcd(a, b) {
  let temp;
  let m;
  if (b > a) {
    temp = a;
    a = b;
    b = temp;
  }
  while (b !== 0) {
    m = a % b;
    a = b;
    b = m;
  }
  return a;
}
// Aspect Ratio Calculator
function ratio(node, index) {
  const x = node.mediaUrl.childImageSharp.fixed.width;
  const y = node.mediaUrl.childImageSharp.fixed.height;
  const c = gcd(x, y);
  const aspect = '' + x / c + ':' + y / c;
  return aspect.split(':')[index];
}
// Photo data structure transformer
export function photoMapper(edges) {
  return edges.map((image) => ({
    src: image.mediaUrl.childImageSharp.fixed.src,
    // src: document.node.url.childImageSharp.fixed.src,
    srcSet: image.mediaUrl.childImageSharp.fixed.srcSet,
    // srcSet: document.node.url.childImageSharp.fixed.srcSet,
    // title: image.node.title,
    width: ratio(image, 0),
    height: ratio(image, 1),
  }));
}
