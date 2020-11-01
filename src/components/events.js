import React from 'react';
import { Container, Header } from 'semantic-ui-react';

import Event from './event';
import './event.scss';

// const events = [
//   {
//     id: 0,
//     title: "ArtonSurf",
//     date: new Date(Date.now()).toDateString(),
//     featured: true,
//     location: "Lincoln Psrk",
//     slug: "art_on_surf",
//     description: "Let get together and feel alright",
//   },
//   {
//     id: 1,
//     title: "Ginchard Show",
//     date: new Date(Date.now()).toDateString(),
//     featured: false,
//     location: "Creperie",
//     slug: "creperie_show",
//     description: "Let get together and feel alright",
//   },
// ];

function Events({ events }) {
  return events.map((event) => <Event key={event.id} event={event} />);
}

export default Events;
