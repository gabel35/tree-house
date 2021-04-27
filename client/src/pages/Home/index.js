import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "../../assets/images/logo.png";

function Home() {
  return (
    <div className="Mdiv">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="App">
        <div className="content_box">
            <h1>WELCOME TO</h1>
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="HomeButton center">
              <Link to="/login">
                <button className="homepage-btn">
                  <span>Log In</span>
                </button>
              </Link>
              <Link to="/signup">
                <button className="homepage-btn">
                  <span>Sign Up</span>
                </button>
              </Link>
          </div>
          <h2>connect with your neighborhood</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
