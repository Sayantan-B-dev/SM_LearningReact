import PropTypes from "prop-types";

function Property({ name, rating, price, id }) {
  return (
    <div className="Property">
      <h2>{name}</h2>
      <h3>${price} a night</h3>
      <h4>{rating}🌟</h4>
    </div>
  );
}

// ✅ Adding PropTypes to validate props
Property.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Unique identifier (string/number)
  name: PropTypes.string.isRequired, // Property name must be a string
  rating: PropTypes.number, // Optional rating (default will be handled if necessary)
  price: PropTypes.number.isRequired, // Price must be a number
};

// ✅ Default Props (if props are missing)
Property.defaultProps = {
  rating: 0, // Default rating if not provided
};

export default Property;
