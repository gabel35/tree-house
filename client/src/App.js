import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home/index';
import Login from './pages/Login/index';
import SignUp from './pages/SignUp/index';
import Pets from './pages/Pets';
import UserProfile from './pages/UserProfile';
import Children from './pages/Children';
import Event from './pages/Event';
import Football from './pages/Football';
import EditAdd from './pages/EditAdd';
import "./App.css";

function App(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
        <Route path='/children'>
          <Children />
        </Route>
        <Route path='/events'>
          <Event />
        </Route>
        <Route path='/sport'>
          <Football />
        </Route>
        <Route path='/pets'>
          <Pets />
        </Route>
        <Route path='/profile'>
          <UserProfile />
        </Route>
        <Route path='/edit-add/:id' {...props}>
          <EditAdd title={'Edit AD'} />
        </Route>
        <Route path='/postad' {...props}>
          <EditAdd title={'Post AD'} />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App

