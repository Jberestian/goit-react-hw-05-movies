import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Loader from 'shared/components/Loader/Loader';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const SearchPage = lazy(() => import('pages/SearchPage/SearchPage'));
const MovieInfo = lazy(() => import('pages/MovieInfo/MovieInfo'));
const CastPage = lazy(() => import('pages/CastPage/CastPage'));
const ReviewsPage = lazy(() => import('pages/ReviewsPage/ReviewsPage'));
const Error = lazy(() => import('pages/Error/Error'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/movies/:movieId" element={<MovieInfo />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
        <Route path="*" element={<Error />} />{' '}
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
