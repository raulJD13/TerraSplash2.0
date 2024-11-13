import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";

function RegisterPage() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  const handleNextClick = (event) => {
    event.preventDefault();
    navigate("/registersecond");
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
          defaultValue="paco@gmail.com"
        />
        <input
          type="password"
          placeholder="Password"
          className="input-field"
          defaultValue="************"
        />
        <button type="submit" className="register-button">
          NEXT
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
