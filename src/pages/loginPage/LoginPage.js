import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const BASE_URL = "http://localhost:3001/users";

async function validateUser(email, password) {
  const response = await fetch(BASE_URL);
  if (!response.ok) throw new Error("Error fetching users.");
  const users = await response.json();
  return users.find((user) => user.email === email && user.password === password);
}

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleBackClick = () => navigate("/");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await validateUser(email, password);
      if (user) {
        navigate("/home");
      } else {
        setError("Invalid email or password.");
      }
    } catch (err) {
      setError("Error logging in. Please try again later.");
    }
  };

  return (
    <div className="login-page-container">
      <button className="login-back-button" onClick={handleBackClick}>↩</button>
      <h1 className="login-h1">Log in</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="login-button">LOG IN</button>
      </form>
    </div>
  );
}

export default LoginPage;
