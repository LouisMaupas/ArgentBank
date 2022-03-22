const Card = ({ img, title, content }) => {
  return (
    <div className="feature-item">
      <img src={img} alt="Icon" class="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;
