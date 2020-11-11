import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './auth-menu.scss';

function AuthMenu() {
  return (
    <Container fluid>
      <Navbar className="auth-menu" expand="lg">
        <Navbar.Brand className="text-white font-weight-bold">React-Admin-Dashboard</Navbar.Brand>
        <Nav className="d-flex align-items-center justify-content-center">
          <Link className="text-white mr-3" to="/auth/sign-in">Already have account?</Link>
          <Link to="/auth/sign-in">
            <Button className="auth-menu__btn">Sign in</Button>
          </Link>
        </Nav>
      </Navbar>
    </Container>
  )
}

export default AuthMenu;