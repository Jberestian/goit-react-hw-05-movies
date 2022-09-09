import { getTrends } from 'shared/api/movieApi';

import { useState, useEffect } from 'react';

import MovieList from 'shared/components/MovieList/MovieList';
import Loader from 'shared/components/Loader/Loader';
import Error from 'pages/Error/Error';

const HomePage = () => {
  const [movies, setMovies] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const [page] = useState(1);

  useEffect(() => {
    const fetchTrends = async () => {
      setMovies(prevMovies => ({
        ...prevMovies,
        loading: true,
        error: null,
      }));
      try {
        const data = await getTrends();
        setMovies(prevMovies => ({
          ...prevMovies,
          items: [...prevMovies.items, ...data],
          loading: false,
        }));
      } catch (error) {
        setMovies(prevMovies => ({
          ...prevMovies,
          error,
        }));
      } finally {
        setMovies(prevMovies => ({
          ...prevMovies,
          loading: false,
        }));
      }
    };
    fetchTrends();
  }, [page]);

  const { items, loading, error } = movies;

  return (
    <div className="container">
      {loading && <Loader />}
      {error && <Error />}
      <MovieList items={items} />
    </div>
  );
};

export default HomePage;
