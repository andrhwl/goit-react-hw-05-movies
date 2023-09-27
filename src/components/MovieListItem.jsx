import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieListItem = ({ id, title, poster }) => {
  const location = useLocation();

  return (
    <li>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <div>
          <img
            src={
              poster
                ? `https://image.tmdb.org/t/p/w500${poster}`
                : `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/No-image-available.jpg/640px-No-image-available.jpg`
            }
            alt="{title}"
          />
        </div>
        <h2>{title ? title : 'No tittle'}</h2>
      </Link>
    </li>
  );
};
export default MovieListItem;

MovieListItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  poster: PropTypes.string,
};
