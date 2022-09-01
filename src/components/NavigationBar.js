import React from "react";
import { NavLink } from "react-router-dom";

export default function NavigationBar() {
  let activeStyle = {
    color: "green",
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/apis"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Apis
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
