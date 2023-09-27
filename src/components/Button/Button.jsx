import PropTypes from 'prop-types';
import { BackBtn } from './Button.styled';

export default function Button({ location }) {
  return (
    <>
      <BackBtn to={location}> &#129144; Back to</BackBtn>
    </>
  );
}

Button.propTypes = {
  location: PropTypes.any.isRequired,
};
