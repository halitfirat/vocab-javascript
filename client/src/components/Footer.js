import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Navbar fixed="bottom">
      <Nav className="mr-auto">
        <Nav.Link style={{ pointerEvents: 'none' }}>
          Copyright © {currentYear} Halit Firat. All Rights Reserved.
        </Nav.Link>

        <Nav.Link href="https://www.freepik.com/photos/book">
          Book photo created by freepik - www.freepik.com
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Footer;
