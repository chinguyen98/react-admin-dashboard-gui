import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Form, Navbar } from 'react-bootstrap';
import FormElement from '../FormElement';
import PropTypes from 'prop-types';

import './main-menu.scss';

MainMenu.propTypes = {
  handleSidebarClick: PropTypes.func,
}

function MainMenu({ handleSidebarClick }) {

  return (
    <Navbar expand="lg" className="main-menu">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <button
        onClick={handleSidebarClick}
        className="main-menu__bars"
      >
        <FontAwesomeIcon className="main-menu__bars__icon" icon={faBars} />
      </button>
      <Navbar.Collapse>
        <Form inline>
          <FormElement
            placeholder="Search..."
          />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MainMenu;