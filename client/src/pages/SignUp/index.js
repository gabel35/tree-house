import React from "react";
import { Link } from "react-router-dom";
import "../Login/style.css";
import SignUp from "../../components/SignUp";
import '../Home/style.css';
import Logo from "../../assets/images/logo.png";

function SignUpForm() {

  return (
    <div className="Mdiv">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="App">
            <div className="logo login">
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
            <div className="loginForm content_box">
              <SignUp SignUp={SignUp} />
              <div className="loginu text-center">
                Already have an account? <Link to="/login"> Sign In </Link>
              </div>
            </div>
      </div>
    </div>
  );
}

export default SignUpForm;
