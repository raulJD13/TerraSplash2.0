import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPageSecond.css";

const BASE_URL = "http://localhost:3001/users";

function RegisterPageSecond() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleBackClick = () => navigate("/");

  const handleSignUpClick = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(BASE_URL);
      if (!response.ok) throw new Error("Error fetching users.");
      const users = await response.json();

      const lastUser = users[users.length - 1];
      await fetch(`${BASE_URL}/${lastUser.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username }),
      });

      navigate("/home");
    } catch (err) {
      alert("Error completing registration. Please try again.");
    }
  };

  return (
    <div className="register-page-second-container">
      <button className="register-second-back-button" onClick={handleBackClick}>↩</button>
      <h1 className="h1-register-second">Register</h1>
      <form className="register-form" onSubmit={handleSignUpClick}>
        <input
          type="text"
          placeholder="Username"
          className="input-field"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit" className="signup-button">SIGN UP</button>
      </form>
      <p className="terms-text">
        By signing up, you agree to Photo’s Terms of Service and Privacy Policy.
      </p>
    </div>
  );
}

export default RegisterPageSecond;
