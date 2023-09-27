import ErrorMessageToUser from 'components/ErrorOccurred';
import Loader from 'components/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'Services/Api';
import { StyledMain } from './MovieDetails/MovieDetails.styled';
import SearchForm from 'components/SearchForm/SearchForm';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    const currentQuery = searchParams.get('query');

    const searchMovieId = async () => {
      if (!currentQuery) return;
      setStatus(STATUS.PENDING);

      try {
        const data = await searchMovies(currentQuery);
        setMovies(data);
        setStatus(STATUS.RESOLVED);
        setError('');

        if (data.length === 0) {
          setMovies([]);
          setError("Movie don't find.");
          setStatus(STATUS.REJECTED);
          return;
        }
      } catch (error) {
        setStatus(STATUS.REJECTED);
        setError(error.message);
      }
    };
    searchMovieId();
  }, [searchParams]);

  const formSubmit = value => {
    setSearchParams({ query: value });
  };

  const formErrorMessage = () => {
    setError("You didn't enter anything! Try again in English!");
    setMovies([]);
    setStatus(STATUS.REJECTED);
  };

  return (
    <StyledMain>
      <SearchForm formSubmit={formSubmit} errorMessage={formErrorMessage} />
      {status === STATUS.REJECTED && <ErrorMessageToUser message={error} />}
      {status === STATUS.RESOLVED && <MoviesList movies={movies} />}
      {status === STATUS.PENDING && <Loader />}
    </StyledMain>
  );
};

export default Movies;
