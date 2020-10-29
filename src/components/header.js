import React from 'react';
import {Link} from 'gatsby';
import {Menu} from 'semantic-ui-react';

function Header() {
  return (
    <Menu fixed="top" inverted>
          <Menu.Item as={Link} to="/">
            Cocoonfly
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item as={Link} to="/artists" activeClassName="active">
              Asrtists
            </Menu.Item>
            <Menu.Item as={Link} to="/events" activeClassName="active">
              Events
            </Menu.Item>
            <Menu.Item as={Link} to="/paintings" activeClassName="active">
              Paintings
            </Menu.Item>
          </Menu.Menu>
        </Menu>
  );
};

export default Header;