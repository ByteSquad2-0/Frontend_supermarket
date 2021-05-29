import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
      <header>
        <a href = "/" className="logo">sConnect</a>
        <span className="right" >
          <input type="text" name="search" className="search-box"></input>
          <a href="/cart" className="cart">Cart</a>
          <a href="/login"><button className="btn">Sign In</button></a>
        </span>
      </header>
  );
}

export default Navbar;
