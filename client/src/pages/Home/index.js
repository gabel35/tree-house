import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "./logo.png";

function Home() {
  return (
    <div>
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <div class="content">
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
        </div>
      </div>
    </div>
  );
}

export default Home;
