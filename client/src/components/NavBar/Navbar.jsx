import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="#">Sahjanand Questions Bank</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/createpost">Create Post </Link></li>
       
      </ul>
    </nav>
  );
}

export default Navbar;
