import React from 'react';
import {NavLink} from 'react-router-dom'

export const Navbar: React.FunctionComponent = () =>(
    <nav>
    <div className="nav-wrapper cyan darken-1 px2">
      <a href="/" className="brand-logo">To Do List</a>
      <ul className="right hide-on-med-and-down">
        <li>
            <NavLink to="/">ToDo List</NavLink>
        </li>
        <li>
            <NavLink to="/about">Information</NavLink>
            </li>
      </ul>
    </div>
  </nav>
)