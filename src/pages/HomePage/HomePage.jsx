import { useEffect, useState } from "react";
import MoviesList from "../../components/MoviesList/MoviesList";
import { getTrendingMovies } from "../../api/api";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import css from "./HomePage.module.css";

export default function HomePage() {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        // setIsError(false);
        const data = await getTrendingMovies();
        setTrendMovies(data.results);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <div>
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      <h2 className={css.title}>Trending movies this week</h2>
      <MoviesList movies={trendMovies} />
    </div>
  );
}