import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./style.css";
import Header from '../../components/Header';
import Footer from "../../components/Footer";
import Posts from "../../components/PostTemplate";

function TreeHouseForum() {
  return (
    // navbar on the side className="nav-side"

    <div>
      <h1>this is a blog for pets</h1>

      <Posts />
    </div>
  );
}

export default TreeHouseForum;
