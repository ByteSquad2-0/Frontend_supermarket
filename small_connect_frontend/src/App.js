import React from 'react'
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Login from './Pages/login';
import Register from './Pages/register';
import Cart from './components/js/Cart';
import Home from './Pages/Home';
import Store from './Pages/Store';
import Items from './Pages/Items';

function App() {
  return (
    <React.Fragment>

      <Switch>
        <Route exact path = '/' component = {Home} />
        <Route exact path = '/login' component = {Login}/>
        <Route exact path = '/register' component = {Register}/>
        <Route exact path = '/Store' component = {Store}/>
        <Route exact path = '/inventory' component = {Items}/>
        <Route exact path = '/cart' component = {Cart}/>
      </Switch>

    </React.Fragment>
  );
}

export default App;
