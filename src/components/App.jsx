import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Loader from './Loader';

const Home = lazy(() => import('Pages/Home'));
const Movies = lazy(() => import('Pages/Movies'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));
const MovieDetails = lazy(() => import('Pages/MovieDetails/MovieDetails'));

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<p>Page not found</p>} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
