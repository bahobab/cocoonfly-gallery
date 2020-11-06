import React from 'react';
import {
 Container, Icon, Segment, Message 
} from 'semantic-ui-react';

function Footer() {
  return (
    <footer style={{ width: '100%', marginTop: '20px' }}>
      {/* <Container style={{ width: '100%' }}> */}
      <Segment>
        <Message
          icon
          style={{
            color: 'white',
            backgroundColor: 'teal',
            width: '100%',
            display: 'flex',
            // flexWrap: 'wrap',
            justifyContent: 'space-around',
            // alignItems: 'flex-start',
            flexDirection: 'column',
            /* flex-wrap: wrap; */
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
              }}
            >
              <Message.Header>Contact us &nbsp;</Message.Header>
              <Icon name="phone square" />
              <Icon name="at" />
            </div>
            <Message.Content>
              <p style={{ marginBottom: '0' }}>
                (001) - (773)-837-9162
              </p>
              <p style={{ marginTop: '0' }}>inquire@cocoonfly.com</p>
            </Message.Content>
          </div>
          {/* </Message> */}

          {/* <Message icon> */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '5px 0',
              marginLeft: '-17px',
            }}
          >
            <Message.Header>
              On the web 
{' '}
<Icon name="world" />
            </Message.Header>
            <Message.Content>www.cocoonfly.com</Message.Content>
          </div>
          {/* </Message> */}

          {/* <Message icon> */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginLeft: '32px',
            }}
          >
            <Message.Header>
              Our Locations 
{' '}
<Icon name="map marker alternate" />
            </Message.Header>
            <Message.Content>
              Chicago, USA - Accra, Ghana
            </Message.Content>
          </div>
        </Message>
        <p style={{ textAlign: 'center' }}>
          copyright &copy; 2020 - Cocoonfly Art Gallery
        </p>
      </Segment>
      {/* </Container> */}
    </footer>
  );
}

export default Footer;
