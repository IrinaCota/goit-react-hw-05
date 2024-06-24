import { Route, Routes } from "react-router-dom";
import './App.css';
import { Suspense, lazy } from "react";

import Navigation from "../Navigation/Navigation";
import Loader from '../Loader/Loader';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'))
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'));

export default function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
        </Routes>
        

</Suspense>
    
    </div>
  );
}
