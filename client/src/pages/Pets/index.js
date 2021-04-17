import React from "react";
import { Container, Row, Col, Jumbotron, Card, Button } from 'react-bootstrap';
import "./style.css";
import Sidebar from "../../components/Sidebar";
import Posts from "../../components/Posts";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function BlogPets() {
  return (
    <div>
        <>
      <Router>
        <Sidebar />
        <Switch>

         {/* <Route path='/pets' component={BlogPets} /> */}
      

        </Switch>
      </Router>
      <Posts/>
    </>
    </div>
  )
}

export default BlogPets



