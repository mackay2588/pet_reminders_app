import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import UserPage from './components/UserPage/UserPage';
import RemindersPage from './components/RemindersPage/RemindersPage';
import AddOwnerPage from './components/AddOwnerPage/AddOwnerPage';
import OwnerProfilePage from './components/OwnerProfilePage/OwnerProfilePage';
import AddPetPage from './components/AddPetPage/AddPetPage';
import './styles/main.css';

const App = () => (
  <div className="mainContainer" >
    <Header title="Project Base" />
    <style>
      @import url('https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700');
    </style>
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          path="/home"
          component={LoginPage}
        />
        <Route
          path="/register"
          component={RegisterPage}
        />
        <Route
          path="/user"
          component={UserPage}
        />
        <Route
          path="/reminders"
          component={RemindersPage}
        />
        <Route
          path="/addOwner"
          component={AddOwnerPage}
        />
        <Route
          path="/ownerProfile/:id"
          component={OwnerProfilePage}
        />
        <Route
          path="/addPet/:id"
          component={AddPetPage}
        />
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
  </div>
);

export default App;
