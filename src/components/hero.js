import React from 'react';
import {Container, Image,Dimmer, Segment, Button, A} from 'semantic-ui-react';

import './hero.scss';

function Hero() {
  return (
    <Container className="heroSection" as="section">
    <Button className='cta' as={A} href="#info" style={{zIndex: '100'}} onClick={() => console.log('go to info')}>Click Here</Button>
    <Dimmer.Dimmable dimmed>

      <Dimmer simple style={{opacity: '0.5'}}/>
    <Image src='https://res.cloudinary.com/krikitue/image/upload/v1603897289/cocoonfly/Sky-is-the-limit_kmyack.jpg' fluid style={{maxHeight: '95vh'}} alt='hero'/>
    </Dimmer.Dimmable>
    </Container>
  );
};

export default Hero;

{/* <div class="ui one column grid"><div class="column"><div class="ui checkbox"><input type="checkbox" class="hidden" readonly="" tabindex="0"/><label><code>visible</code></label></div></div><div class="column"><div class="ui segment pushable"><div class="ui inverted vertical labeled icon ui overlay left thin sidebar menu"><a class="item"><i aria-hidden="true" class="home icon"></i>Home</a><a class="item"><i aria-hidden="true" class="gamepad icon"></i>Games</a><a class="item"><i aria-hidden="true" class="camera icon"></i>Channels</a></div><div class="pusher"><div class="ui basic segment"><h3 class="ui header">Application Content</h3><img src="https://react.semantic-ui.com/images/wireframe/paragraph.png" class="ui image"/></div></div></div></div></div> */}