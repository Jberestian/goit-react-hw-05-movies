import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getMovieReviews } from 'shared/api/movieApi';

import style from './reviewsPage.module.css';

const ReviewsPage = () => {
  const [review, setReview] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const { results } = await getMovieReviews(movieId);
        setReview(results);
      } catch (error) {
        setError(error);
      }
    };
    fetchReview();
  }, [movieId]);

  const items = review.map(({ content, author, id }) => (
    <li className={style.item} key={id}>
      <p className={style.author}>{author}</p>
      <p className={style.post}>{content}</p>
    </li>
  ));

  return <ul className={style.list}>{items}</ul>;
};

export default ReviewsPage;
