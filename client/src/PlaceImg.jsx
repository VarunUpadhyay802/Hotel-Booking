import PropTypes from 'prop-types';

export default function PlaceImg({ place, index = 0, className = null }) {
  if (!place.photos?.length) {
    return null; // Return null instead of an empty string
  }

  if (!className) {
    className = 'object-cover rounded-md';
  }

  return (
    <img className={className} src={'http://localhost:4000/uploads/' + place.photos[index]} alt="" />
  );
}

// Add prop types validation
PlaceImg.propTypes = {
  place: PropTypes.shape({
    photos: PropTypes.arrayOf(PropTypes.string), // Assuming photos is an array of strings
    // Add other properties if needed
  }).isRequired,
  index: PropTypes.number,
  className: PropTypes.string,
};
