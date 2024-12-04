import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./RegisterPageSecond.css";

const BASE_URL = "http://localhost:3001/users";

function RegisterPageSecond() {
  const navigate = useNavigate();
  const location = useLocation();
  const { userId } = location.state || {}; // Obtener el userId pasado desde RegisterPage
  const { login } = useAuth(); // Usar el método de login para autenticar después
  const [username, setUsername] = useState("");

  const handleBackClick = () => navigate("/");

  const handleSignUpClick = async (event) => {
    event.preventDefault();
    if (!userId) {
      alert("Error: User ID not found.");
      return;
    }
    try {
      await fetch(`${BASE_URL}/${userId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username }),
      });

      const updatedUserResponse = await fetch(`${BASE_URL}/${userId}`);
      if (!updatedUserResponse.ok) throw new Error("Error fetching updated user.");
      const updatedUser = await updatedUserResponse.json();

      login(updatedUser); // Iniciar sesión con el usuario actualizado
      navigate("/home");
    } catch (err) {
      alert("Error completing registration. Please try again.");
    }
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
