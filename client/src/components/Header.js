import React from 'react';
import { useSelector } from 'react-redux';
import { Navbar, NavDropdown, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button, Nav } from 'react-bootstrap';

import { user, getUserLoading } from '../store/auth/authSelector';

const Header = () => {
  const userSelector = useSelector(user);
  const getUserLoadingSelector = useSelector(getUserLoading);

  const handleSelect = (eventKey) => (window.location.href = eventKey);

  const renderLogin = () => {
    switch (userSelector) {
      case null:
        return (
          <a href="/auth/google">
            <Button variant="danger">
              <i className="fab fa-google mr-2"></i>
              Login with Google
              {getUserLoadingSelector && (
                <Spinner animation="border" size="sm" />
              )}
            </Button>
          </a>
        );
      default:
        return (
          <NavDropdown
            variant="pills"
            onSelect={handleSelect}
            title={userSelector.firstName}
          >
            <NavDropdown.Item style={{ color: 'black' }} eventKey="/api/logout">
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        );
    }
  };

  return (
    <Navbar bg="primary" variant="dark">
      <Nav.Link
        style={{ color: 'white', marginLeft: '50px' }}
        href="https://github.com/halitfirat/vocab"
      >
        <i class="fab fa-github"></i> GitHub
      </Nav.Link>

      <Link to={userSelector ? '/vocabs' : '/'} style={{ marginLeft: '140px' }}>
        <Navbar.Brand>
          <b>VOCAB</b>
        </Navbar.Brand>
      </Link>

      <Navbar.Toggle />

      <Navbar.Collapse className="justify-content-end ">
        <Navbar.Text style={{ marginRight: '70px' }}>
          {renderLogin()}
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
