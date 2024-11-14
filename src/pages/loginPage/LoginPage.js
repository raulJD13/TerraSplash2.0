import React from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  const handleNextClick = (event) => {
    event.preventDefault();
    navigate("/home");
  };

  return (
    <div className="login-page-container">
      <button className="login-back-button" onClick={handleBackClick}>
        ↩
      </button>
      <h1 className="login-h1">Log in</h1>
      <form className="login-form" onSubmit={handleNextClick}>
        <input
          type="email"
          placeholder="Email"
          className="input-field"
          defaultValue="paco@gmail.com"
        />
        <input
          type="password"
          placeholder="Password"
          className="input-field"
          defaultValue="************"
        />
        <button type="submit" className="login-button">
          LOG IN
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
