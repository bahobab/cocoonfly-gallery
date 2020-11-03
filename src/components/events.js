import React from "react";
import { Container, Header } from "semantic-ui-react";

import Event from "./event";
import "./event.scss";

function Events({ events }) {
  return events.map(event => <Event key={event.id} event={event} />);
}

export default Events;
