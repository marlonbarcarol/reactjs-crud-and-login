import React from 'react';
import { NavLink } from 'react-router-dom'
import LogoutButton from './LogoutButton';

const Header = () => (
  <header className="menu-top">
    <nav className="in-content">
      <ul>
        <li>
          <NavLink exact to="/users" activeClassName="active">
            Users List
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/users/add" activeClassName="active">
            Add User
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;