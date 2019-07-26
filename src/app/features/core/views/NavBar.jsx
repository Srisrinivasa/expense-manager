import React from "react";
import { NavLink } from "react-router-dom";
import "features/core/styles/NavBar";

export const NavBar = ({ location }) => {
  return (
    <nav className="bg-dark full-height">
      <ul className="nav flex-column text-center">
        <li className="nav-item my-2">
          <NavLink to="/" exact className="nav-NavLink" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="nav-item my-2">
          <NavLink
            to="/settings"
            className="nav-NavLink"
            activeClassName="active"
          >
            Settings
          </NavLink>
        </li>
        <li className="nav-item my-2">
          <NavLink
            to="/profile"
            className="nav-NavLink"
            activeClassName="active"
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
