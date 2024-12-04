import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";

const BASE_URL = "http://localhost:3001/users";

async function addUser(newUser) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  });
  if (!response.ok) throw new Error("Error adding user.");
}

function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleBackClick = () => navigate("/");

  const handleNextClick = async (event) => {
    event.preventDefault();
    try {
      await addUser({
        email,
        password,
        username: "",
        location: "Las Palmas de Gran Canaria", // Valor predeterminado
        profileImage: "/images/user-default.png",
        backgroundImage: "/images/default-image.jpg",
      });
      navigate("/registersecond");
    } catch (err) {
      alert("Error registering user. Please try again.");
    }
  };

  return (
    <div className="register-page-container">
      <button className="register-back-button" onClick={handleBackClick}>
        ↩
      </button>
      <h1 className="h1-register">Register</h1>
      <form className="register-form" onSubmit={handleNextClick}>
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
        <button type="submit" className="register-button">
          NEXT
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
