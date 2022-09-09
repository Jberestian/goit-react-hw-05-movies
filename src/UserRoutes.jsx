import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const CastPage = lazy(() => import('pages/CastPage/CastPage'));

const UserRoutes = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="cast" element={<CastPage />}></Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
