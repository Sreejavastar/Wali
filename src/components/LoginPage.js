// src/components/LoginPage.js
import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Perform authentication logic here (e.g., compare with hardcoded credentials)
    if (username === "user" && password === "password") {
      alert("Login successful!");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <div className="container">
        <h2>Login</h2>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
      </div>
      <p>
        Don't have an account? <Link to="/newpage">Click here</Link> to go to
        the new page.
      </p>
    </div>
  );
};

export default LoginPage;
