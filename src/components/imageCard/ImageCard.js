import './ImageCard.css';

const ImageCard = ({ imageUrl, name, rating }) => {
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>★</span>
    ));
  };

  return (
    <div className="image-card">
      <img src={imageUrl} alt={name} className="image-card-img" />
      <div className="heart-icon">❤️</div>
      <div className="image-info">
        <div className="image-name">{name}</div>
        <div className="image-rating">{renderStars()}</div>
      </div>
    </div>
  );
};

export default ImageCard;
