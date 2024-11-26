import './LightButton.css';

function LightButton({ onClick }) {
  return (
    <button onClick={onClick} className="light-button">
      <img src="/images/LightButton.svg" alt="Sign up" />
    </button>
  );
}

export default LightButton;
