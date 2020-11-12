import React, { useCallback, useState } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import './carousel.scss';

function carousel({ photos }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const openLightBox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  function closeModal() {
    setCurrentImage(0);
    setViewerIsOpen(false);
  }

  return (
    <div>
      <Gallery
        style={{ maxWidth: '100%' }}
        photos={photos}
        onClick={openLightBox}
      />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeModal}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((photo) => ({
                ...photo,
                srcset: photo.srcset,
                caption: photo.title || 'caption',
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
  const aspect = `${x / c}:${y / c}`;
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
    width: parseInt(ratio(image, 0), 32),
    height: parseInt(ratio(image, 1), 32),
  }));
}
