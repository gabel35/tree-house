import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home/index';
import Login from './pages/Login/index';
import SignUp from './pages/SignUp/index';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/signup'>
          <Login/>
        </Route>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App

