import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { Menu } from 'semantic-ui-react';

import './header.scss';

export const query = graphql`
  {
    logoImage: file(relativePath: { eq: "cocoonfly-logo.png" }) {
      childImageSharp {
        fixed(width: 40, height: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

function Header() {
  const data = useStaticQuery(query);
  return (
    <Menu fixed="top" inverted style={{ maxWidth: '100vw' }}>
      <Menu.Item className="homeLink" as={Link} to="/">
        <Image
          fixed={data.logoImage.childImageSharp.fixed}
          alt="Cocoonfly.com"
        />
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item as={Link} to="/artists" activeClassName="active">
          Asrtists
        </Menu.Item>
        <Menu.Item as={Link} to="/events" activeClassName="active">
          Events
        </Menu.Item>
        <Menu.Item as={Link} to="/gallery" activeClassName="active">
          Gallery
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default Header;
