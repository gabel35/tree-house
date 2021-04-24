import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import LoginForm from "../../components/LoginForm";
import '../Home/style.css';
import Logo from "../../assets/images/logo.png";
import API from "../../utils/API";

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
      //change this to user.email and user.password when database works//
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

  //for when database actually works//
  // useEffect(() => {
  //   loadUser()
  // }, [])

  // function loadUser () {
  //   API.getUser()
  //   .then(res => {
  //     console.log(res)
  //     setUser(res)
  //   })
  //   .catch(err => console.log(err))
  // }


// log out 

  const Logout = () => {
    setUser({ name: "", email: "" })
  };

  return (
    <div className="Mdiv">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
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
