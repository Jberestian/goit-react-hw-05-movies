import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import style from './castPage.module.css';
import { getMovieCast } from 'shared/api/movieApi';

const CastPage = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { cast } = await getMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        setError(error);
      }
    };
    fetchCast();
  }, []);

  const items = cast.map(({ cast_id, character, name, profile_path }) => {
    const imgSrc = `https://image.tmdb.org/t/p/w200${profile_path}`;
    const imgPlug = 'http://via.placeholder.com/120x180';
    const src = profile_path ? imgSrc : imgPlug;
    return (
      <li className={style.item} key={cast_id}>
        <img className={style.img} src={src} alt={name} />
        <p className={style.name}>{name}</p>
        <p className={style.char}>character: {character}</p>
      </li>
    );
  });

  return <ul className={style.list}>{items}</ul>;
};

export default CastPage;
