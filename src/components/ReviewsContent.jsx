import PropTypes from 'prop-types';

export default function ReviewsContent({ reviews }) {
  return (
    <div>
      <ul>
        {reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <span>{author}</span>
              <p>
                <span>Reviews: </span>
                {content}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

ReviewsContent.propTypes = {
  reviews: PropTypes.array.isRequired,
};
