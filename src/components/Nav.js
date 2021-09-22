import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calc',
      text: 'calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];

  return (
    <div className="navBar">
      <div>LOGO</div>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} activeClassName="active-link" exact>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav;
