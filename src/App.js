import './App.css';
import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import Dashboard from './partials/Dashboard'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './Login';
import Logout from './Logout';
import Catindex from './Cat/Catindex';
import Orindex from './Ordres/Orindex';
import Prindex from './prod/Prindex';
import GlobalState from './GlobalState';

function App() {


  const history = useHistory()
  function loggedIn() {
    const token = localStorage.getItem('user-info');
    if (!token) {
      history.push('/dashboard');
    }
  }
  return (

      <div className="App">
            <GlobalState>

        <BrowserRouter>
          <div>
            <Route path="/index">
              <Login />
            </Route>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/Logout">
              <Logout />
            </Route>
            <Route path="/categorie"  >
              <Dashboard />
              <Catindex />
            </Route>
            <Route path="/Produit"  >
              <Dashboard />
              <Prindex />
            </Route>
            <Route path="/Ordres"  >

              <Dashboard />
              <Orindex />

            </Route>
          </div>
        </BrowserRouter>
        </GlobalState>

      </div>

  );
}

export default App;
