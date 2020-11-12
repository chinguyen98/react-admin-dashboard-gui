import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './auth-menu.scss';

AuthMenu.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  btnContent: PropTypes.string,
}

function AuthMenu({ title, path, btnContent }) {
  return (
    <Container fluid>
      <Navbar className="auth-menu" expand="lg">
        <Navbar.Brand className="text-white font-weight-bold">React-Admin-Dashboard</Navbar.Brand>
        <Nav className="d-flex align-items-center justify-content-center">
          <Link className="text-white mr-3" to={path}>{title}</Link>
          <Link to={path}>
            <Button className="auth-menu__btn">{btnContent}</Button>
          </Link>
        </Nav>
      </Navbar>
    </Container>
  )
}

export default AuthMenu;