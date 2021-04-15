import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home/index';
import Login from './pages/Login/index';
import SignUp from './pages/SignUp/index';
import TreeHouseForum from './pages/TreeHouseForum';
import AddPost from './pages/AddPost';
import UserProfile from './pages/UserProfile';
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/signup'>
          <SignUp/>
        </Route>
        <Route path='/forum'>
          <TreeHouseForum/>
        </Route>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App

