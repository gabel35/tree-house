import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "./logo.png";

function Home() {
  return (
    <div>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="content">
        <div>
          <h1>WELCOME TO</h1>
          <img src={logo} alt="Logo" />
        </div>
        <div>
          <Link to="/login">
            <button className="homepage-btn">log in</button>
          </Link>
          <Link to="/signup">
            <button className="homepage-btn">sign up</button>
          </Link>
          <Link to="/Pets">
            <button className="homepage-btn">pets</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
