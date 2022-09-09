import { Link } from 'react-router-dom';

import style from './singleMovie.module.css';

const SingleMovie = ({ id, title, src, state }) => {
  return (
    <li className={style.items}>
      <Link state={state} to={`/movies/${id}`}>
        <img
          className={style.img}
          src={`https://image.tmdb.org/t/p/w500/${src}`}
          alt="movie img"
        />
        {title}
      </Link>
    </li>
  );
};

export default SingleMovie;
