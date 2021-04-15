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
    <div className="App">
      {user.email != "" ? (
        <div className="welcome">
          <h2>
            welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Log out</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default Login;
