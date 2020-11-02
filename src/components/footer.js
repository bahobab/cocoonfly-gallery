import React from 'react';
import {
 Container, Icon, Segment, Message 
} from "semantic-ui-react";

function Footer() {
  return (
    <footer>
      {/* <Container style={{ width: '100%' }}> */}
      <Segment style={{ width: "100%", marginTop: "20px" }}>
        <Message
          icon
          style={{
            color: 'white',
            backgroundColor: 'teal',
            maxWidth: "100%",
            display: 'flex',
            flexWrap: "wrap",
            justifyContent: 'space-around',
            alignItems: 'flex-start',
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: 'flex' }}>
              <Icon name="phone square" />
              <Icon name="at" />
            </div>
            <Message.Content>
              <Message.Header>Contact us:</Message.Header>
              <p>(001) - (773)-837-9162</p>
              <p>inquire@cocoonfly.com</p>
            </Message.Content>
          </div>
          {/* </Message> */}

          {/* <Message icon> */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Icon name="world" />
            <Message.Content>
              <Message.Header>On the web</Message.Header>
              www.cocoonfly.com
            </Message.Content>
          </div>
          {/* </Message> */}

          {/* <Message icon> */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Icon name="map marker alternate" />
            <Message.Content>
              <Message.Header>Our Locations</Message.Header>
              Chicago, USA - Accra, Ghana
            </Message.Content>
          </div>
        </Message>
      </Segment>
      {/* </Container> */}
    </footer>
  );
}

export default Footer;
