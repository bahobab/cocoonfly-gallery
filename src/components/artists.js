import React from 'react';
import { Container, Header } from 'semantic-ui-react';

import Artist from './artist';

const artists = [
  {
    id: 0,
    name: 'Polo',
    bio: "this is Polo's bio",
    featured: true,
    imgUrl: 'http://blabla.com',
    slug: 'polo_page',
  },
  {
    id: 1,
    name: 'Toto',
    bio: "this is Toto's bio",
    featured: true,
    imgUrl: 'http://blabla.com',
    slug: 'toto_page',
  },
];

function Artists(props) {
  return artists.map((artist) => <Artist key={artist.id} artist={artist} />);
}

export default Artists;
