import { ReactComponent as LoginIcon } from '../../images/LightButton.svg';
import './LightButton.css';

function LightButton({ onClick }) {
  return (
    <button onClick={onClick} className="light-button">
      <LoginIcon />
    </button>
  );
}


export default LightButton;