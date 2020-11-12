import React from 'react';
import propTypes from 'prop-types';

import Artist from './artist';

function Artists({ artists }) {
  return artists.map((artist) => (
    <Artist key={artist.slug} artist={artist} />
  ));
}

Artists.propTypes = {
  artists: propTypes.arrayOf(propTypes.object).isRequired,
};

export default Artists;
