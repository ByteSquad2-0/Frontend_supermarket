import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
      <header>
        <a href = "/" className="logo">Connect</a>
        <span className="right" >
          <input type="text" name="search" className="search-box"></input>
          <a href="/cart" className="cart">Cart</a>
          <button className="btn">Sign In</button>
        </span>
      </header>
  );
}

export default Navbar;
