import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Header = () => (
  <header>
    <div className="navigation">
      <div className="logo">
        <h1>Picsgram</h1>
      </div>
      <button className="icon" >
      <i class="fa fa-bars"></i>
      </button>
    </div>
    <h1>Photo Gallery App</h1>
    <div className="links">
      <NavLink to="/" className="link">
        Home
      </NavLink>
      <NavLink to="/gallery" className="link">
        Gallery
      </NavLink>
    </div>
  </header>
);

export default Header;