import React from 'react'
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Login from './Pages/login';
import Register from './Pages/register';
import Home from './Pages/Home';
import Store from './Pages/Store';
import Items from './Pages/Items';
import Cart from './Pages/Cart';

function App() {
  return (
    <React.Fragment>

      <Switch>
        <Route exact path = '/' component = {Home} />
        <Route exact path = '/login' component = {Login}/>
        <Route exact path = '/register' component = {Register}/>
        <Route path = '/Store' component = {Store}/>
        <Route path = '/inventory' component = {Items}/>
        <Route exact path = '/cart' component = {Cart}/>
      </Switch>

    </React.Fragment>
  );
}

export default App;
