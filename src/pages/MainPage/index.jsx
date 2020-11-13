import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem } from '@fortawesome/free-solid-svg-icons';
import MainMenu from '../../components/MainMenu';
import { Link, useRouteMatch } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import AuthenticatedRoute from '../../components/AuthenticatedRoute';
import Dashboard from '../Dashboard';

import './main-page.scss';
import 'react-pro-sidebar/dist/css/styles.css';

function MainPage() {
  const [isSidebarClose, setIsSidebarClose] = useState(true);
  const { url } = useRouteMatch();

  return (
    <div className="main-page d-flex">
      <ProSidebar collapsed={isSidebarClose}>
        <SidebarHeader>
          <Menu>
            <MenuItem className="font-weight-bold">react-admin-dashboard</MenuItem>
          </Menu>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem icon={<FontAwesomeIcon icon={faGem} />}>
              Dashboard
              <Link to={`${url}/dashboard`} />
            </MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
        </SidebarFooter>
      </ProSidebar>
      <div className="main-page__contentArea">
        <MainMenu
          handleSidebarClick={() => { setIsSidebarClose(!isSidebarClose) }}
        />
        <Switch>
          <AuthenticatedRoute exact path={`${url}/dashboard`} component={Dashboard} />
        </Switch>
      </div>
    </div>
  )
}

export default MainPage;