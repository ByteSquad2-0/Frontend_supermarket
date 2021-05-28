import React from 'react'
import './App.css';
import Footer from './components/js/footer';

function App() {
  return (
    <React.Fragment>
      <header>
        <span className="logo">Connect</span>
        <span className="right" >
          <input type="text" name="search" className="search-box"></input>
          <a href="/" className="cart">Cart</a>
          <button className="btn">Sign In</button>
        </span>
      </header>
      <div className="main" >
        {/* your code put here */}
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
