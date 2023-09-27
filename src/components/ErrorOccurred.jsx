import PropTypes from 'prop-types';

export default function ErrorMessageToUser({ message }) {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

ErrorMessageToUser.propTypes = {
  message: PropTypes.string.isRequired,
};
