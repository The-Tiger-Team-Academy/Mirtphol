import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <img src="image 2.png" alt="#" height="45" />
      <ul>
        <li>
          <NavLink to="/Home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Add">Add</NavLink>
        </li>
      </ul>
    </nav>
  );
};

