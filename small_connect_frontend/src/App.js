import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/js/footer';
import Homecarddata from './Homecarddata';
import Hcards from './components/js/Hcards';

function App() {
  return (
    <React.Fragment>
      <Navbar />

      {Homecarddata.map(Hcards)}

      <Footer />
    </React.Fragment>
  );
}

export default App;
