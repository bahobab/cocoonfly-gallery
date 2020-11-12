import React from 'react';
import propTypes from 'prop-types';

import Event from './event';
import './event.scss';

function Events({ events }) {
  return events.map((event) => (
    <Event key={event.id} event={event} />
  ));
}

Events.propTypes = {
  events: propTypes.arrayOf(propTypes.array).isRequired,
  // events: propTypes.array.isRequired,
};

export default Events;
