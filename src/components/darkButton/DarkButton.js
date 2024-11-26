import './DarkButton.css';

function DarkButton({ onClick }) {
  return (
    <button onClick={onClick} className="dark-button">
      <img src="/images/darkButton.svg" alt="Register Icon" />
    </button>
  );
}

export default DarkButton;
