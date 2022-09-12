import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import TextField from 'shared/components/TextField/TextField';
import Loader from 'shared/components/Loader/Loader';
import MovieList from 'shared/components/MovieList/MovieList';

import Error from 'pages/Error/Error';

import { getSearchMovies } from 'shared/api/movieApi';

import fields from './fields';

import style from './searchPage.module.css';

const SearchPage = () => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    const searchOfName = async () => {
      setError(null);
      setLoading(true);
      try {
        const { results } = await getSearchMovies(query);
        setState(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if (query) {
      searchOfName();
    }
  }, [setState, query]);

  const onSubmit = e => {
    e.preventDefault();
    const query = e.target[1].value;
    const params = Object.fromEntries([...searchParams]);
    setSearchParams({ ...params, query });
  };

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setSearchParams(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const isMovies = Boolean(state.length);

  return (
    <>
      <div className={style.wrapper}>
        <form className={style.searchForm} onSubmit={onSubmit}>
          <button type="submit" className={style.btn}>
            <span className={style.label}>Search</span>
          </button>
          <TextField
            value={query || ''}
            handleChange={handleChange}
            {...fields.search}
          />
        </form>
      </div>
      {loading && <Loader />}
      {error && <Error />}
      {isMovies && <MovieList items={state} />}
    </>
  );
};

export default SearchPage;
