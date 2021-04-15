import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "../../assets/images/logo.png";

function Home() {
  return (
    <div className="Mdiv">
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <div className="App">
        <div class="content_box">
        <div>
        <h1>WELCOME TO</h1>
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
          </div>
          <div className="HomeButton">
            <Link to="/login">
              <button className="homepage-btn"><span>Log In</span></button>
            </Link>
            <Link to="/signup">
              <button className="homepage-btn"><span>Sign Up</span></button>
            </Link>
            <Link to="/forum">
              <button className="homepage-btn"><span>Forum</span></button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
