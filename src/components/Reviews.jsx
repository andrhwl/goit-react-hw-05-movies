import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'Services/Api';
import ErrorMessageToUser from './ErrorOccurred';
import ReviewsContent from './ReviewsContent';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    getMovieReviews(movieId)
      .then(data => {
        if (data.results.length === 0) {
          setError('We don`t have any reviews for this movie');
          return;
        }

        // prepare info about reviews
        const reviewsInfo = data.results.map(({ id, author, content }) => ({
          id,
          author,
          content,
        }));
        setReviews(reviewsInfo);
      })
      .catch(error => setError(error.message));
  }, [movieId]);

  return (
    <div>
      {error && <ErrorMessageToUser message={error} />}
      {reviews && <ReviewsContent reviews={reviews} />}
    </div>
  );
};

export default Reviews;
