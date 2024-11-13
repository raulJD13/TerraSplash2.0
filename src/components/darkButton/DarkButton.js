import { ReactComponent as RegisterIcon } from '../../images/darkButton.svg';
import './DarkButton.css';

function DarkButton({ onClick }) {
  return (
    <button onClick={onClick} className="dark-button">
      <RegisterIcon />
    </button>
  );
}


export default DarkButton;
