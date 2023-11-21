    
import PropTypes from 'prop-types';

const Image = ({ src, ...rest }) => {
    // Adjust the src value based on your conditions
    src = src && src.includes('https://')
        ? src
        : 'http://localhost:4000/uploads/' + src;

    return (
        <img {...rest} src={src} alt={''} />
    );
}

// PropTypes validation
Image.propTypes = {
    src: PropTypes.string.isRequired,
    // Add other prop types if applicable
};

export default Image;
