// RegisterPageSecond.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPageSecond.css";

function RegisterPageSecond() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  const handleSignUpClick = (event) => {
    event.preventDefault();
    navigate("/homepage");
  };

  return (
    <div className="register-page-second-container">
      <button className="register-second-back-button" onClick={handleBackClick}>
        ↩
      </button>
      <h1 className="h1-register-second">Register</h1>
      <form className="register-form" onSubmit={handleSignUpClick}>
        <input
          type="text"
          placeholder="Username"
          className="input-field"
          defaultValue="Paco_1230"
        />
        <button type="submit" className="signup-button">
          SIGN UP
        </button>
      </form>
      <p className="terms-text">
        By signing up, you agree to Photo’s Terms of Service and Privacy Policy.
      </p>
    </div>
  );
}

export default RegisterPageSecond;
