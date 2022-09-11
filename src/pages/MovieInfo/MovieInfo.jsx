import { useEffect, useState } from 'react';
import {
  useParams,
  useNavigate,
  Outlet,
  Link,
  useLocation,
} from 'react-router-dom';

import { getMovieDedails } from 'shared/api/movieApi';

import Loader from 'shared/components/Loader/Loader';
import Error from 'pages/Error/Error';

import style from './movieInfo.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [state, setState] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();

  const from = location.state?.from || '/';

  const navigate = useNavigate();

  const goBack = () => navigate(from);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await getMovieDedails(movieId);
        setState(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [movieId]);

  const { name, title, vote_average, overview, genres, poster_path } = state;

  const generList =
    genres &&
    genres.map(({ name }, idx) => (
      <li className={style.item} key={idx}>
        {name}
      </li>
    ));

  return (
    <>
      <div className={style.moviInfo}>
        <div className="container">
          {loading && <Loader />}
          {error && <Error />}
          <button onClick={goBack}>Go Back</button>
          {state && (
            <div className={style.info}>
              <div className={style.imgWrapper}>
                <img
                  className={style.img}
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt="img"
                />
              </div>

              <div className={style.aboutMovie}>
                <h1 className={style.title}>{name || title}</h1>
                <p className={style.raining}>User Score: {vote_average}</p>
                <p className={style.overview}>Overview</p>
                <p className={style.overviewText}>{overview}</p>
                <p className={style.genres}>Genres</p>
                <ul className={style.generList}>{generList}</ul>

                <p className={style.additionalInfo}>Additional Information</p>

                <div className={style.linkWrapper}>
                  <Link
                    state={from}
                    className={style.link}
                    to={`/movies/${movieId}/cast`}
                  >
                    Cast
                  </Link>
                  <Link
                    state={from}
                    className={style.link}
                    to={`/movies/${movieId}/reviews`}
                  >
                    Reviews
                  </Link>
                </div>
              </div>
            </div>
          )}
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
