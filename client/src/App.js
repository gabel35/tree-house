  
import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home/index';
import Login from './pages/Login/index';
import SignUp from './pages/SignUp/index';
import Pets from './pages/Pets/index';
import "bootstrap/dist/css/bootstrap.min.css";


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
        <Route path='/Pets'>
          <Pets/>
        </Route>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App