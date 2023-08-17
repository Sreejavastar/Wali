// src/components/LoginPage.js
import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./CreateAccount.css";

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
        <h2>Create Account</h2>
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
          <label htmlFor="username">Name:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="username">Email</label>
          <input
            type="email"
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
        <div className="login-buttons">
          <button onClick={handleLogin}>Create Account</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
