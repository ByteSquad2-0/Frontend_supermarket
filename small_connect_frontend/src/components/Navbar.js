import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
      <header>
        <span className="logo">sConnect</span>
        <span className="right" >
          <input type="text" name="search" className="search-box"></input>
          <a href="/" className="cart">Cart</a>
          <button className="btn">Sign In</button>
        </span>
      </header>
  );
}

export default Navbar;
