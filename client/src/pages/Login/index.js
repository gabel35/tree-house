import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import LoginForm from "../../components/LoginForm";
import '../Home/style.css';
import Logo from "../../assets/images/logo.png";

function Login() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };
  const [user, setUser] = useState({ name: "", email: "" });

  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Details do not match!");
    }
  };


// log out 

  const Logout = () => {
    setUser({ name: "", email: "" })
  };

  return (
    <div className="Mdiv">
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <div className="App">
        {user.email != "" ? (
          <div className="welcome">
            <h2>
              welcome, <span>{user.name}</span>
            </h2>
            <button onClick={Logout}>Log out</button>
          </div>
        ) : (
          <>
            <div className="logo login">
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
            <div className="loginForm content_box">
              <LoginForm Login={Login} error={error} />
              <div className="loginu text-center">
                No account? <Link to="/signup"> Sign up now </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
