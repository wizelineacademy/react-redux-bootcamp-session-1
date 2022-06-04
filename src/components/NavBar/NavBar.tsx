import React, { FunctionComponent } from 'react';
import AppBar from '@mui/material/AppBar';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HideOnScroll from '../HideOnScroll/HideOnScroll';
import './NavBar.css';

const NavBar: FunctionComponent = () => {
  return (
    <HideOnScroll>
      <AppBar className="c-nav-bar" position="fixed">
        <AccountBoxIcon className="c-nav-bar__profile" fontSize="large" />
      </AppBar>
    </HideOnScroll>
  );
}

export default NavBar;
