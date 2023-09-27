import PropTypes from 'prop-types';
import { CredList } from './Credits.styled';

export default function Credits({ credits }) {
  return (
    <CredList>
      {credits.map(({ id, name, profilePath }) => {
        return (
          <li key={id}>
            <img
              src={
                profilePath
                  ? `https://image.tmdb.org/t/p/w500${profilePath}`
                  : `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/No-image-available.jpg/640px-No-image-available.jpg`
              }
              alt={name}
            />

            <h2>{name ? name : 'Without  name'}</h2>
          </li>
        );
      })}
    </CredList>
  );
}

Credits.propTypes = {
  credits: PropTypes.array.isRequired,
};
