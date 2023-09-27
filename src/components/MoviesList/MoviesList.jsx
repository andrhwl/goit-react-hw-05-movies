import PropTypes from 'prop-types';
import MovieListItem from '../MovieListItem';
import { MoviesListUl } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  return (
    <MoviesListUl>
      {movies.map(({ id, title, poster_path }) => {
        return (
          <MovieListItem key={id} id={id} title={title} poster={poster_path} />
        );
      })}
    </MoviesListUl>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
