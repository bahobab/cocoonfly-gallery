import React from 'react';
import propTypes, {array} from 'prop-types';

import Artist from './artist';

function Artists({ artists }) {
  return artists.map((artist) => (
    <Artist key={artist.slug} artist={artist} />
  ));
}

Artists.propTypes = {
  artists: propTypes.array.isRequired,
};

export default Artists;
