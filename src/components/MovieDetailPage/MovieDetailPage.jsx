import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader';
import {
  OneMovieCast,
  OneMovieImg,
  OneMovieInfo,
  OneMovieLi,
  OneMovieSpan,
  OneMovieTopContainer,
} from './MovieDetailPage.styled';

export default function MovieDetailPage({ data }) {
  const {
    original_title,
    title,
    genres,
    overview,
    poster_path,
    release_date,
    vote_average,
  } = data;

  // Prepear data for render
  const rating = Math.round(vote_average * 10);
  const date = release_date.slice(0, 4);
  const genresArray = genres.map(gen => gen.name).join(', ');
  const location = useLocation();

  return (
    <div>
      <OneMovieTopContainer>
        <OneMovieImg
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/No-image-available.jpg/640px-No-image-available.jpg`
          }
          alt={title}
        />
        <div>
          <h1>
            {original_title ? original_title : 'There should have been a title'}
          </h1>
          <div>
            <p>
              <OneMovieSpan>Rating:</OneMovieSpan>
              {rating ? rating : 'Absent'}
            </p>
            <p>
              <OneMovieSpan>Release date:</OneMovieSpan>
              {date ? date : 'Absent'}
            </p>
            <p>
              <OneMovieSpan>Genre:</OneMovieSpan>
              {genresArray ? genresArray : 'Repeated'}
            </p>
            <p>
              <OneMovieSpan>Description: </OneMovieSpan>
            </p>
          </div>
          {overview
            ? overview
            : 'There should have been a description here, but it is better to see once than to read a hundred times.'}
        </div>
      </OneMovieTopContainer>
      <div>
        <OneMovieInfo>Additional information</OneMovieInfo>
      </div>
      <ul>
        <OneMovieLi>
          <OneMovieCast to="cast" state={location.state}>
            Cast &#10140;
          </OneMovieCast>
        </OneMovieLi>
        <OneMovieLi>
          <OneMovieCast to="reviews" state={location.state}>
            Reviews &#10140;
          </OneMovieCast>
        </OneMovieLi>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

MovieDetailPage.propTypes = {
  data: PropTypes.shape({
    original_title: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};
