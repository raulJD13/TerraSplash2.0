import './Title.css';

const Title = ({ text }) => {
  return (
    <div className="selection-word" data-testid="title">
      {text}
    </div>
  );
};

export default Title;
